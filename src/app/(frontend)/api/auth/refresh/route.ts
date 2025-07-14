import { NextResponse } from 'next/server'
import { JwtService } from '@/shared/services/jwt-service'
import { CookiesService } from '@/shared/services/cookies-service'

export async function POST() {
  const { refreshToken } = await CookiesService.getTokens()

  if (!refreshToken) {
    return NextResponse.json({ error: 'Нет refresh токена' }, { status: 401 })
  }

  try {
    const payload = await JwtService.verifyToken(refreshToken)

    const newAccessToken = await JwtService.signAccessToken({
      id: payload.id,
      email: payload.email,
    })

    await CookiesService.setAccessToken(newAccessToken)

    return NextResponse.json({ message: 'Access token обновлён', accessToken: newAccessToken })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Неверный refresh токен' }, { status: 401 })
  }
}
