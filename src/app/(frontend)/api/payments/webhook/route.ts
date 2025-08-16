import { NextRequest, NextResponse } from 'next/server'
import { markErrorPaid, markPaid, upsertWebinarPayment, ykGetPayment } from '../_lib'
import { NodemailerService } from '@/shared/services/nodemailer.service'
import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const gql = await getServerAuthGqlClient({})

  try {
    const payload = await req.json()
    const event = payload?.event
    const payment = payload?.object
    const paymentId: string | undefined = payment?.id

    if (!event || !paymentId) {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    // Верифицируем статус напрямую у YooKassa
    const yk = await ykGetPayment(paymentId)

    // Синхронизируем запись у себя (status/paid)
    await upsertWebinarPayment({
      userId: Number(yk?.metadata?.userId) || yk?.metadata?.userId,
      webinarId: Number(yk?.metadata?.webinarId),
      paymentId: yk.id,
      amount: Number(yk?.amount?.value || 0),
      status: yk.status,
    })

    // Если платёж прошёл — отмечаем как paid=true
    if (yk.status === 'succeeded' && yk.paid === true) {
      await markPaid(paymentId)

      const webinar = await gql.GetWebinarById({
        id: Number(yk?.metadata?.webinarId),
      })

      await NodemailerService.sendWebinarAccess(
        yk?.metadata?.userEmail || '',
        webinar.Webinar.title,
        webinar.Webinar.url,
      )
    }

    if (yk.status === 'canceled') {
      await markErrorPaid({
        paymentId,
        code: yk?.cancellation_details?.code || '',
        message: yk?.cancellation_details?.message || '',
      })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Webhook error:', e)
    // YooKassa ожидает 2xx, иначе будет ретраить
    return NextResponse.json({ ok: false }, { status: 200 })
  }
}
