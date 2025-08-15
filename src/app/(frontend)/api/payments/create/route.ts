/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server'
import { ykCreatePayment, upsertWebinarPayment } from '../_lib'

export const runtime = 'nodejs'

type CreateBody = {
  webinarId: number
  webinarSlug: string
  price: number
  userId: number // сервер ВСЕГДА должен сам знать userId; не доверяй фронту — подтяни из сессии в реальном проекте
}

export async function POST(req: NextRequest) {
  try {
    const { webinarId, userId, price, webinarSlug } = (await req.json()) as CreateBody

    if (!webinarId || !userId || !price || !webinarSlug) {
      return NextResponse.json({ message: 'Bad request' }, { status: 400 })
    }

    // 1) цена вебинара из БД
    const amount = {
      value: price.toFixed(2), // "1000.00"
      currency: 'RUB',
    }

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
        userId: String(userId),
        webinarSlug,
      },
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
      yk?.confirmation?.confirmation_url ?? yk?.confirmation?.confirmationUrl ?? null

    return NextResponse.json({
      paymentId: yk.id,
      status: yk.status,
      confirmationUrl,
    })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ message: e?.message ?? 'Create payment error' }, { status: 500 })
  }
}
