import { useEffect, useState } from 'react'

export function useShuffledOnClient<T>(input: readonly T[], depKey: string | number): T[] {
  const [shuffled, setShuffled] = useState<T[]>([])

  useEffect(() => {
    if (!input) return

    const copy: T[] = input.map((item) => ({ ...item }))
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }

    setShuffled(copy)
  }, [depKey, input.length]) // зависим только от ключа вопроса и длины массива

  return shuffled.length > 0 ? shuffled : [...input]
}
