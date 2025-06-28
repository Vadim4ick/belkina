type MatchingPair = {
  id: string
  left: string
  right: string
}

/**
 * Проверяет корректность сопоставлений на основе цифрового ответа пользователя
 * @param originalPairs - Оригинальный порядок пар (левая часть)
 * @param shuffledRight - Перемешанный порядок правой части (видел пользователь)
 * @param userAnswerString - Строка цифр, например "213"
 */
export function checkMatchingCorrectness(
  originalPairs: MatchingPair[],
  shuffledRight: MatchingPair[],
  userAnswerString: string,
): Record<string, boolean> {
  const result: Record<string, boolean> = {}
  const answers = userAnswerString.trim().split('') // ['2', '1', '3']

  answers.forEach((char, idx) => {
    const selectedIndex = parseInt(char, 10) - 1 // '1' → 0, '2' → 1 и т.д.

    const expectedRight = originalPairs[idx]?.right
    const actualRight = shuffledRight[selectedIndex]?.right
    const id = originalPairs[idx]?.id

    result[id] = actualRight === expectedRight
  })

  return result
}

export const questionNameFn = (id: string | number) => `q_${id}`
