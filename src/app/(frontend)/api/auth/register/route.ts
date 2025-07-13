import { NextResponse } from 'next/server'
import { gql } from '@/shared/graphql/client'
import { JwtService } from '@/shared/services/jwt-service'
import bcrypt from 'bcryptjs'
import { CookiesService } from '@/shared/services/cookies-service'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ error: 'Некорректные данные' }, { status: 400 })
  }

  const userRes = await gql.GetUserByEmail({ email })
  if (userRes.Users.totalDocs > 0) {
    return NextResponse.json({ error: 'Пользователь уже существует' }, { status: 409 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await gql.CreateUser({
    email,
    password: hashedPassword,
    role: 'user',
    signupMethod: 'email',
    name: email,
  })

  const accessToken = await JwtService.signAccessToken({
    id: String(newUser.createUser.id),
    email: newUser.createUser.email,
  })

  const refreshToken = await JwtService.signRefreshToken({
    id: String(newUser.createUser.id),
    email: newUser.createUser.email,
  })

  await CookiesService.setAuthCookies({ accessToken, refreshToken })

  return NextResponse.json({ message: 'Пользователь зарегистрирован' })
}
