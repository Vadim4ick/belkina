import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { JwtService } from '@/shared/services/jwt-service'

export async function POST() {
  const cookieStore = await cookies()

  const refreshToken = cookieStore.get('refreshToken')?.value

  if (!refreshToken) {
    return NextResponse.json({ error: 'Нет refresh токена' }, { status: 401 })
  }

  try {
    const payload = await JwtService.verifyToken(refreshToken)

    const newAccessToken = await JwtService.signAccessToken({
      id: payload.id,
      email: payload.email,
    })

    ;(await cookies()).set('accessToken', newAccessToken, {
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    })

    return NextResponse.json({ message: 'Access token обновлён', accessToken: newAccessToken })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Неверный refresh токен' }, { status: 401 })
  }
}
