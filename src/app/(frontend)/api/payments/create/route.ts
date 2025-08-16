/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server'
import { ykCreatePayment, upsertWebinarPayment, getWebinarPriceById } from '../_lib'

export const runtime = 'nodejs'

type CreateBody = {
  webinarId: number
  webinarSlug: string
  userEmail: string
  userId: number // сервер ВСЕГДА должен сам знать userId; не доверяй фронту — подтяни из сессии в реальном проекте
}

export async function POST(req: NextRequest) {
  try {
    const { webinarId, userId, webinarSlug, userEmail } = (await req.json()) as CreateBody

    if (!webinarId || !userId || !webinarSlug || !userEmail) {
      return NextResponse.json({ message: 'Bad request' }, { status: 400 })
    }

    const webinar = await getWebinarPriceById(webinarId)

    const price = webinar?.Webinar?.price

    if (!price || price === 0) {
      return NextResponse.json({ message: 'Webinar not found' }, { status: 404 })
    }

    // 1) цена вебинара из БД
    const amount = {
      value: price,
      currency: 'RUB',
    }

    const expiresAt = new Date(Date.now() + 20 * 60 * 1000).toISOString()

    // 2) создаём платёж в YooKassa (одностадийный, с авто-капчером)
    const yk = await ykCreatePayment({
      amount,
      capture: true, // авто-списание при успешной оплате
      description: `Вебинар #${webinarId}`,
      confirmation: {
        type: 'redirect',
        return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/webinars/${webinarSlug}`,
      },
      payment_method_data: {
        type: 'bank_card',
      },
      // полезно класть метадату
      metadata: {
        webinarId,
        userEmail,
        userId: String(userId),
        webinarSlug,
      },
      expires_at: expiresAt,
    })

    // 3) сохраним/обновим запись об оплате у себя
    await upsertWebinarPayment({
      userId,
      webinarId,
      paymentId: yk.id,
      amount: price,
      status: yk.status,
    })

    // 4) отдадим ссылку для редиректа
    const confirmationUrl =
      (yk?.confirmation &&
        ('confirmation_url' in yk.confirmation
          ? yk.confirmation.confirmation_url
          : (yk.confirmation as any)?.confirmationUrl)) ??
      null

    return NextResponse.json({
      paymentId: yk.id,
      status: yk.status,
      confirmationUrl,
    })
  } catch (e: any) {
    console.error('createWebinarPayment', e)

    // если это ошибка от GraphQL
    if (e?.response?.errors?.[0]?.message) {
      return NextResponse.json(
        { message: e.response.errors[0].message },
        { status: e.response.errors[0].extensions?.statusCode || 500 },
      )
    }

    // если это ошибка от fetch/YooKassa
    if (e?.message) {
      return NextResponse.json({ message: e.message }, { status: 500 })
    }

    // fallback
    return NextResponse.json(
      { message: 'Неизвестная ошибка при создании платежа' },
      { status: 500 },
    )
  }
}
