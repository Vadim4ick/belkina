import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { JwtService } from '../services/jwt-service'
import { PayloadRequest } from 'payload'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSettledValue = <T>(res: PromiseSettledResult<T>): T | null =>
  res.status === 'fulfilled' ? res.value : null

export const summClockTime = (arrDuration: number[]): string => {
  const totalSeconds = arrDuration.reduce((acc, duration) => acc + duration, 0)

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor(totalSeconds % 60)

  const pad = (n: number) => String(n).padStart(2, '0')

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
export async function checkAccessToken({ req }: { req: PayloadRequest }): Promise<boolean> {
  // 1. Разрешить доступ администраторам из системной users collection
  if (req.user?.role === 'admin') {
    return true
  }

  const authHeader = req.headers.get('authorization')
  const token = authHeader?.replace(/^Bearer\s/, '')

  if (!token) {
    console.warn('🚫 Нет токена — доступ по умолчанию запрещён')
    return false
  }

  try {
    await JwtService.verifyToken(token)

    console.log('✅ Токен валиден')
    return true
  } catch (err) {
    console.warn('⚠️ Токен невалиден:', (err as Error)?.message)
    return false
  }
}
