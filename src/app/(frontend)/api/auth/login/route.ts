import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { gql } from '@/shared/graphql/client'
import { JwtService } from '@/shared/services/jwt-service'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ error: 'Некорректные данные' }, { status: 400 })
  }

  const userRes = await gql.GetUserByEmail({ email })
  if (userRes.Users.totalDocs <= 0) {
    return NextResponse.json({ error: 'Пользователь не найден' }, { status: 404 })
  }

  const user = userRes.Users.docs[0]

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Неверный пароль' }, { status: 401 })
  }

  console.log('✅ ')
  const accessToken = await JwtService.signAccessToken({
    id: String(user.id),
    email: user.email,
  })

  const refreshToken = await JwtService.signRefreshToken({
    id: String(user.id),
    email: user.email,
  })

  ;(await cookies()).set('accessToken', accessToken, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  })
  ;(await cookies()).set('refreshToken', refreshToken, {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })

  return NextResponse.json({ message: 'Успешно' })
}
