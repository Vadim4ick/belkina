import { QuestionFragmentFragment } from '@/shared/graphql/__generated__'
import { checkMatchingCorrectness } from './const'

export const useTestEvaluation = (questions: QuestionFragmentFragment[]) => {
  const evaluate = (allAnswers: Record<string, any>) => {
    const results: Record<string, boolean> = {}

    questions.forEach((question) => {
      const answerKey = `q_${question.id}`

      switch (question.questionType) {
        case 'single_choice': {
          const userAnswer = allAnswers[answerKey]
          const correctAnswer = question.answers.find((a) => a.isCorrect)?.value
          results[question.id] = userAnswer === correctAnswer
          break
        }

        case 'multiple_choice': {
          const userAnswers = allAnswers[answerKey] || []
          const correctAnswers = question.answers
            .filter((a) => a.isCorrect)
            .map((a) => a.value)
            .sort()

          const sortedUserAnswers = [...userAnswers].sort()
          const isCorrect =
            sortedUserAnswers.length === correctAnswers.length &&
            sortedUserAnswers.every((val, idx) => val === correctAnswers[idx])

          results[question.id] = isCorrect
          break
        }

        case 'text_input': {
          const userAnswer = (allAnswers[answerKey] || '').trim().toLowerCase()
          const correct = question.textAnswer.trim().toLowerCase()

          const normalize = (str: string) =>
            str
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '') // удалить диакритику (ё → е)
              .replace(/[^\w\s]|_/g, '') // удалить пунктуацию
              .replace(/\s+/g, ' ') // убрать лишние пробелы
              .trim()

          results[question.id] = normalize(userAnswer) === normalize(correct)
          break
        }

        case 'matching': {
          const { answer = '', shuffled = [] } = allAnswers[answerKey] || {}
          const matchResults = checkMatchingCorrectness(
            question.matchingPairs.map((p) => p),
            shuffled,
            answer,
          )
          results[question.id] = Object.values(matchResults).every(Boolean)
          break
        }

        default:
          results[question.id] = false
      }
    })

    const correctCount = Object.values(results).filter(Boolean).length

    return { results, correctCount }
  }

  return { evaluate }
}
