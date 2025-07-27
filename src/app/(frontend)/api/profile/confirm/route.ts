import { NextResponse } from 'next/server'
import { NodemailerService } from '@/shared/services/nodemailer.service'
import { JwtService } from '@/shared/services/jwt-service'
import { CookiesService } from '@/shared/services/cookies-service'
import { gql } from '@/shared/graphql/client'

export async function POST(req: Request) {
  const { token, code, onlyCheck } = await req.json()

  const isValid = await NodemailerService.verifyCodeToken(token, code)

  if (!isValid) {
    return NextResponse.json({ message: 'Неверный или истёкший код' }, { status: 400 })
  }

  // Если нужно только проверить код — ничего больше не делаем
  if (onlyCheck) {
    return NextResponse.json({ message: 'Код подтверждён' })
  }

  // Распакуем email из токена
  const { payload } = await NodemailerService.decode(token)

  const userRes = await gql.GetUserByEmail({ email: payload.email })
  const user = userRes.Users.docs[0]

  if (!user) {
    return NextResponse.json({ message: 'Пользователь не найден' }, { status: 404 })
  }

  if (user.isVerified) {
    return NextResponse.json({ message: 'Email уже подтверждён' }, { status: 400 })
  }

  // Обновляем статус подтверждения
  await gql.UpdateUserVerified({
    id: user.id,
  })

  const accessToken = await JwtService.signAccessToken({
    id: String(user.id),
    email: user.email,
  })

  const refreshToken = await JwtService.signRefreshToken({
    id: String(user.id),
    email: user.email,
  })

  await CookiesService.setAuthCookies({ accessToken, refreshToken })

  return NextResponse.json({ message: 'Email подтверждён, вход выполнен' })
}
