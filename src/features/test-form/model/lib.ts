import { GetByIdTestResultQuery } from '@/shared/graphql/__generated__'

export const totalCorrectAnswersFn = (
  answers: GetByIdTestResultQuery['TestResults']['docs'][0]['answers'],
) => {
  return answers.filter((a) => a.isCorrect).length
}
