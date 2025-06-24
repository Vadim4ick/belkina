export function checkMatchingCorrectness(
  pairs: { id: string; left: string; right: string }[],
  userAnswer: Record<string, string>,
): Record<string, boolean> {
  const letterToIndex = (letter: string) => letter.toUpperCase().charCodeAt(0) - 65 // A → 0, B → 1...

  const result: Record<string, boolean> = {}

  for (const pair of pairs) {
    const letter = userAnswer[pair.id]?.toUpperCase()
    const index = letterToIndex(letter)

    const userRight = pairs[index]?.right
    const isCorrect = userRight === pair.right

    result[pair.id] = isCorrect
  }

  return result
}
