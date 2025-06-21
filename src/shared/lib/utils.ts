import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSettledValue = <T>(res: PromiseSettledResult<T>): T | null =>
  res.status === 'fulfilled' ? res.value : null
