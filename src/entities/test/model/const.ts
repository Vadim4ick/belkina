import { RUS_LETTERS } from '@/shared/const'

export function checkMatchingCorrectness(
  pairs: { id: string; left: string; right: string }[],
  userAnswer: Record<string, string>,
): Record<string, boolean> {
  const letterToIndex = (letter: string): number => RUS_LETTERS.indexOf(letter.toUpperCase())

  const result: Record<string, boolean> = {}

  for (const pair of pairs) {
    const rawLetter = userAnswer[pair.id]
    const index = letterToIndex(rawLetter ?? '')

    const userRight = pairs[index]?.right
    const isCorrect = userRight === pair.right

    result[pair.id] = isCorrect
  }

  return result
}
