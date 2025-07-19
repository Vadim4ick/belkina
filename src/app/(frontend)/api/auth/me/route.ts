import { NextResponse } from 'next/server'
import { JwtService } from '@/shared/services/jwt-service'
import { CookiesService } from '@/shared/services/cookies-service'
import { getMeCached } from '@/shared/actions/me.action'

export async function GET() {
  const { accessToken, refreshToken } = await CookiesService.getTokens()

  let payload: { id: string; email: string } | null = null

  if (!accessToken) {
    return NextResponse.json({ user: null })
  }

  try {
    // ✅ Пробуем accessToken
    payload = await JwtService.verifyToken(accessToken)
  } catch (err) {
    console.error(err)

    if ((err as { code: string }).code === 'ERR_JWT_EXPIRED' && refreshToken) {
      console.info('Access token expired, trying refresh token…')

      try {
        // ✅ Проверяем refreshToken
        const refreshPayload = await JwtService.verifyToken(refreshToken)

        // Выдаём новый accessToken
        const newAccessToken = await JwtService.signAccessToken({
          id: refreshPayload.id,
          email: refreshPayload.email,
        })

        await CookiesService.setAccessToken(newAccessToken)

        payload = refreshPayload
      } catch (refreshErr) {
        console.error('Refresh token invalid or expired', refreshErr)
        await CookiesService.clearAuthCookies()
        return NextResponse.json({ user: null })
      }
    } else {
      await CookiesService.clearAuthCookies()
      return NextResponse.json({ user: null })
    }
  }

  if (!payload) {
    return NextResponse.json({ user: null })
  }

  if (!payload) return NextResponse.json({ user: null })

  const user = await getMeCached(payload.email)
  if (!user) {
    await CookiesService.clearAuthCookies()
    return NextResponse.json({ user: null })
  }

  return NextResponse.json({ user })
}
