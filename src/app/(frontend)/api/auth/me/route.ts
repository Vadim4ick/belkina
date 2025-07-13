import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { JwtService } from '@/shared/services/jwt-service'
import { gql } from '@/shared/graphql/client'

export async function GET() {
  const cookie = await cookies()

  const accessToken = cookie.get('accessToken')?.value
  const refreshToken = cookie.get('refreshToken')?.value

  let payload: { id: string; email: string } | null = null

  if (!accessToken) {
    return NextResponse.json({ user: null })
  }

  try {
    // ✅ Пробуем accessToken
    payload = await JwtService.verifyToken(accessToken)
  } catch (err: any) {
    console.error(err)

    if (err.code === 'ERR_JWT_EXPIRED' && refreshToken) {
      console.info('Access token expired, trying refresh token…')

      try {
        // ✅ Проверяем refreshToken
        const refreshPayload = await JwtService.verifyToken(refreshToken)

        // Выдаём новый accessToken
        const newAccessToken = await JwtService.signAccessToken({
          id: refreshPayload.id,
          email: refreshPayload.email,
        })

        cookie.set('accessToken', newAccessToken, {
          path: '/',
          secure: process.env.NODE_ENV === 'production',
        })

        payload = refreshPayload
      } catch (refreshErr) {
        console.error('Refresh token invalid or expired', refreshErr)
        cookie.delete('accessToken')
        cookie.delete('refreshToken')
        return NextResponse.json({ user: null })
      }
    } else {
      cookie.delete('accessToken')
      cookie.delete('refreshToken')
      return NextResponse.json({ user: null })
    }
  }

  if (!payload) {
    return NextResponse.json({ user: null })
  }

  try {
    const res = await gql.GetUserByEmail({ email: payload.email })
    const user = res.Users?.docs?.[0] || null

    if (!user) {
      cookie.delete('accessToken')
      cookie.delete('refreshToken')
      return NextResponse.json({ user: null })
    }

    return NextResponse.json({ user })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ user: null })
  }
}
