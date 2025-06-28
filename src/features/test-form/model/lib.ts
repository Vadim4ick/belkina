import { QuestionFragmentFragment } from '@/shared/graphql/__generated__'

export const totalCorrectAnswersFn = (answers: QuestionFragmentFragment['answers']) => {
  return answers.filter((a) => a.isCorrect).length
}
