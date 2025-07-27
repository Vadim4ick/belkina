import { NextResponse } from 'next/server'
import { gql } from '@/shared/graphql/client'
import { JwtService } from '@/shared/services/jwt-service'
import bcrypt from 'bcryptjs'
import { CookiesService } from '@/shared/services/cookies-service'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ message: 'Некорректные данные' }, { status: 400 })
  }

  const userRes = await gql.GetUserByEmail({ email })
  if (userRes.Users.totalDocs <= 0) {
    return NextResponse.json({ message: 'Пользователь не найден' }, { status: 404 })
  }

  const user = userRes.Users.docs[0]

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return NextResponse.json({ message: 'Неверный пароль' }, { status: 401 })
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

  await CookiesService.setAuthCookies({ accessToken, refreshToken })

  return NextResponse.json({ message: 'Успешно' })
}
