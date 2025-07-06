import { useEffect, useRef, useState } from 'react'

export function useShuffledOnClient<T>(input: readonly T[]): T[] {
  const [shuffled, setShuffled] = useState<T[]>([])
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return

    // снимаем readonly со всего массива
    const copy: T[] = input.map((item) => ({ ...item }))

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }

    setShuffled(copy)
    initialized.current = true
  }, [input])

  return shuffled.length > 0 ? shuffled : input?.slice()
}
