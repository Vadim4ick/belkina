import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  const COOKIE = await cookies()

  COOKIE.delete('accessToken')
  COOKIE.delete('refreshToken')

  return NextResponse.json({ message: 'Вы вышли из системы' })
}
