import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'
import { WebinarPayment_Status_MutationInput } from '@/shared/graphql/__generated__'
import { NodemailerService } from '@/shared/services/nodemailer.service'
import crypto from 'node:crypto'

export const runtime = 'nodejs'

const SHOP_ID = process.env.YOOKASSA_SHOP_ID!
const SECRET_KEY = process.env.YOOKASSA_SECRET_KEY!

export function authHeader() {
  const basic = Buffer.from(`${SHOP_ID}:${SECRET_KEY}`).toString('base64')
  return `Basic ${basic}`
}

// Создаём платеж
export async function ykCreatePayment(body: unknown) {
  const res = await fetch('https://api.yookassa.ru/v3/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Idempotence-Key': crypto.randomUUID(),
      Authorization: authHeader(),
    },

    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`YooKassa create error: ${res.status} ${err}`)
  }
  return res.json() as Promise<any>
}

// Получаем информацию о платеже
export async function ykGetPayment(paymentId: string) {
  const res = await fetch(`https://api.yookassa.ru/v3/payments/${paymentId}`, {
    headers: { Authorization: authHeader() },
    cache: 'no-store',
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`YooKassa get error: ${res.status} ${err}`)
  }
  return res.json() as Promise<any>
}

// Создаём/обновляем запись оплаты
export async function upsertWebinarPayment(opts: {
  userId: number
  webinarId: number
  paymentId: string
  amount: number // в рублях
  status: WebinarPayment_Status_MutationInput
}) {
  const gql = await getServerAuthGqlClient({})

  const search = await gql.GetWebinarByPaymentId({
    paymentId: opts.paymentId,
  })

  if (search?.WebinarPayments.docs?.[0]?.id) {
    return gql.UpdateWebinarPayment({
      id: search.WebinarPayments.docs[0].id,
      data: {
        user: opts.userId,
        amount: opts.amount,
        status: opts.status,
        paymentId: opts.paymentId,
        metadata: JSON.stringify({ userId: opts.userId, webinarId: opts.webinarId }),
        currency: 'RUB',
        failure: {
          code: '',
          message: '',
        },
        webinar: opts.webinarId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    })
  }

  return await gql.CreateWebinarPayment({
    data: {
      user: opts.userId,
      amount: opts.amount,
      status: opts.status,
      paymentId: opts.paymentId,
      metadata: JSON.stringify({ userId: opts.userId, webinarId: opts.webinarId }),
      currency: 'RUB',
      failure: {
        code: '',
        message: '',
      },
      webinar: opts.webinarId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  })
}

// Помечаем оплаченным по paymentId
export async function markPaid(paymentId: string) {
  const gql = await getServerAuthGqlClient({})

  const search = await gql.GetWebinarByPaymentId({
    paymentId,
  })

  if (!search?.WebinarPayments.docs?.[0]?.id) return

  return gql.UpdateStatusSuccessWebinarPayment({
    id: search.WebinarPayments.docs[0].id,
  })
}

// Помечаем ошибкой по paymentId
export async function markErrorPaid({
  paymentId,
  code,
  message,
}: {
  paymentId: string
  code: string
  message: string
}) {
  const gql = await getServerAuthGqlClient({})

  const search = await gql.GetWebinarByPaymentId({
    paymentId,
  })

  if (!search?.WebinarPayments.docs?.[0]?.id) return

  return await gql.UpdateCancelStatusWebinarPayment({
    id: search.WebinarPayments.docs[0].id,
    code,
    message,
  })
}

export async function getWebinarPriceById(webinarId: number) {
  const gql = await getServerAuthGqlClient({})
  return gql.GetWebinarPriceById({ id: webinarId })
}
