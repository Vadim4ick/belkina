import { gql } from '@/shared/graphql/client'
import { NextResponse } from 'next/server'
import { NodemailerService } from '@/shared/services/nodemailer.service'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ message: 'Некорректный email' }, { status: 400 })
  }

  const userRes = await gql.GetUserByEmail({ email })
  const user = userRes.Users.docs[0]

  if (!user) {
    return NextResponse.json({ message: 'Пользователь не найден' }, { status: 404 })
  }

  if (user.isVerified) {
    return NextResponse.json({ message: 'Email уже подтверждён' }, { status: 400 })
  }

  const code = NodemailerService.generateCode()
  const token = await NodemailerService.signCode(email, code)

  await NodemailerService.sendCode(email, code, token)

  return NextResponse.json({ message: 'Код отправлен', token })
}
