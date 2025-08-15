/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server'
import { upsertWebinarPayment, ykGetPayment } from '../../_lib'

export const runtime = 'nodejs'

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const paymentId = params.id
    const yk = await ykGetPayment(paymentId)

    await upsertWebinarPayment({
      userId: Number(yk?.metadata?.userId) || yk?.metadata?.userId,
      webinarId: Number(yk?.metadata?.webinarId),
      paymentId: yk.id,
      amount: Number(yk?.amount?.value || 0),
      status: yk.status,
    })

    return NextResponse.json({
      id: yk.id,
      status: yk.status,
      paid: yk.paid === true,
      amount: yk.amount,
      metadata: yk.metadata,
    })
  } catch (e: any) {
    return NextResponse.json({ message: e?.message ?? 'Status error' }, { status: 500 })
  }
}
