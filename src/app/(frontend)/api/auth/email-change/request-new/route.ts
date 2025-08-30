import { NextResponse } from 'next/server'
import { NodemailerService } from '@/shared/services/nodemailer.service'
import { gql } from '@/shared/graphql/client'

export async function POST(req: Request) {
  const { newEmail, oldToken } = await req.json()
  if (!newEmail) return NextResponse.json({ message: 'Некорректный email' }, { status: 400 })

  // (опционально) проверить JWT старой почты — даже если код ещё не подтверждён,
  // это поможет связать запросы; надёжнее — возвращать «sessionToken» после verifyOld
  if (!oldToken)
    return NextResponse.json({ message: 'Требуется подтверждение текущей почты' }, { status: 401 })

  // Email не должен быть занят
  const existing = await gql.GetUserByEmail({ email: newEmail.toLowerCase() })
  if (existing?.Users?.docs?.[0]) {
    return NextResponse.json({ message: 'Эта почта уже используется' }, { status: 409 })
  }

  const code = NodemailerService.generateCode()
  const token = await NodemailerService.signCode(newEmail, code) // подписываем код для НОВОЙ почты
  await NodemailerService.sendCode(newEmail, code, token, true)
  return NextResponse.json({ message: 'Код отправлен', token })
}
