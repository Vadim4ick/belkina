/* eslint-disable @typescript-eslint/no-explicit-any */
import { QuestionFragmentFragment } from '@/shared/graphql/__generated__'
import { checkMatchingCorrectness } from './const'

export const useTestEvaluation = (questions: QuestionFragmentFragment[]) => {
  const evaluate = (allAnswers: Record<string, any>) => {
    const results: Record<string, boolean> = {}

    questions.forEach((question) => {
      results[question.id] = evaluateSingleAnswer(question, allAnswers)
    })

    const correctCount = Object.values(results).filter(Boolean).length

    return { results, correctCount }
  }

  const evaluateSingle = (questionId: number, allAnswers: Record<string, any>) => {
    const question = questions.find((q) => q.id === questionId)
    if (!question) return false

    return evaluateSingleAnswer(question, allAnswers)
  }

  return { evaluate, evaluateSingle }
}

// Вынесена логика оценки одного вопроса
function evaluateSingleAnswer(
  question: QuestionFragmentFragment,
  allAnswers: Record<string, any>,
): boolean {
  const answerKey = `q_${question.id}`

  switch (question.questionType) {
    case 'single_choice': {
      const userAnswer = allAnswers[answerKey]
      const correctAnswer = question.answers.find((a) => a.isCorrect)?.value
      return userAnswer === correctAnswer
    }

    case 'multiple_choice': {
      const userAnswers = allAnswers[answerKey] || []
      const correctAnswers = question.answers
        .filter((a) => a.isCorrect)
        .map((a) => a.value)
        .sort()

      const sortedUserAnswers = [...userAnswers].sort()
      return (
        sortedUserAnswers.length === correctAnswers.length &&
        sortedUserAnswers.every((val, idx) => val === correctAnswers[idx])
      )
    }

    case 'text_input': {
      const userAnswer = (allAnswers[answerKey] || '').trim().toLowerCase()
      const correct = question.textAnswer.trim().toLowerCase()

      const normalize = (str: string) =>
        str
          .normalize('NFD') // ё → е
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .trim()

      // нормализуем ответ в массив токенов
      const tokenize = (str: string) =>
        normalize(str)
          .replace(/[^a-zа-я0-9]+/gi, ' ') // всё, кроме букв/цифр → пробел
          .split(/\s+/) // режем по пробелам
          .filter(Boolean)

      const userTokens = tokenize(userAnswer)
      const correctTokens = tokenize(correct)

      // вариант 1: если всё слитно (личноеместоимение) → склеиваем
      const userJoined = userTokens.join('')
      const correctJoined = correctTokens.join('')

      // считаем правильным, если:
      // - токены совпали (по порядку), либо
      // - склеенные строки совпали
      const isCorrect =
        JSON.stringify(userTokens) === JSON.stringify(correctTokens) || userJoined === correctJoined

      return isCorrect
    }

    case 'matching': {
      const { answer = '', shuffled = [] } = allAnswers[answerKey] || {}
      const matchResults = checkMatchingCorrectness(
        question.matchingPairs.map((p) => p),
        shuffled,
        answer,
      )
      return Object.values(matchResults).every(Boolean)
    }

    default:
      return false
  }
}
