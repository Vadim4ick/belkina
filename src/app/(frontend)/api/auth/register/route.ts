import { gql } from '@/shared/graphql/client'
import { NodemailerService } from '@/shared/services/nodemailer.service'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ message: 'Некорректные данные' }, { status: 400 })
  }

  const userRes = await gql.GetUserByEmail({ email })
  if (userRes.Users.totalDocs > 0) {
    return NextResponse.json({ message: 'Пользователь уже существует' }, { status: 409 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await gql.CreateUser({
    email,
    password: hashedPassword,
    role: 'user',
    signupMethod: 'email',
    name: email,
  })

  const code = NodemailerService.generateCode()
  const token = await NodemailerService.signCode(email, code)
  await NodemailerService.sendCode(email, code, token)

  return NextResponse.json({
    message: 'Код подтверждения отправлен на почту',
    token,
  })
}
