import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { JwtService } from '../services/jwt-service'
import { PayloadRequest } from 'payload'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSettledValue = <T>(res: PromiseSettledResult<T>): T | null =>
  res.status === 'fulfilled' ? res.value : null

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
    // console.log('✅ Токен валиден:', decoded)
    return true
  } catch (err) {
    console.warn('⚠️ Токен невалиден:', (err as Error)?.message)
    return false
  }
}
