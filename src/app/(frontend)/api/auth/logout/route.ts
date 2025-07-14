import { CookiesService } from '@/shared/services/cookies-service'
import { NextResponse } from 'next/server'

export async function POST() {
  await CookiesService.clearAuthCookies()

  return NextResponse.json({ message: 'Вы вышли из системы' })
}
