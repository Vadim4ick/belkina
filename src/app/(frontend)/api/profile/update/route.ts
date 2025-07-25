import { NextResponse } from 'next/server'
import { gql } from '@/shared/graphql/client'
import bcrypt from 'bcryptjs'
import { JwtService } from '@/shared/services/jwt-service'
import { CookiesService } from '@/shared/services/cookies-service'

export async function POST(req: Request) {
  const { email, password, type } = await req.json()
  const { accessToken } = await CookiesService.getTokens()
  const { id } = await JwtService.verifyToken(accessToken)

  if (!id) {
    return NextResponse.json({ error: 'Неавторизован' }, { status: 401 })
  }

  let hashedPassword
  if (password) hashedPassword = await bcrypt.hash(password, 10)

  let updatedUser

  if (type === 'email') {
    updatedUser = await gql.UpdateUserEmail({
      id: Number(id),
      email: email,
    })
  } else {
    updatedUser = await gql.UpdateUserPassword({
      id: Number(id),
      password: hashedPassword || '',
    })
  }

  // 🔁 Новый токен с новым email
  const newAccessToken = await JwtService.signAccessToken({
    id: String(updatedUser.updateUser.id),
    email: updatedUser.updateUser.email,
  })

  const newRefreshToken = await JwtService.signRefreshToken({
    id: String(updatedUser.updateUser.id),
    email: updatedUser.updateUser.email,
  })

  await CookiesService.setAuthCookies({
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  })

  return NextResponse.json({ message: 'Профиль обновлён', user: updatedUser.updateUser })
}
