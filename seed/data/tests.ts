import payload from 'payload'
import { createQuestions } from './questions'

export const createTests = async (recommendationId: number, tariffId: number) => {
  const allQuestions = await createQuestions(recommendationId)

  const test1 = await payload.create({
    collection: 'tests',
    data: {
      title: 'Общий тест №1',
      description: 'Тест с разными типами вопросов',
      tariff: tariffId,
      questions: [allQuestions[0].id, allQuestions[1].id, allQuestions[4].id, allQuestions[5].id],
    },
  })

  const test2 = await payload.create({
    collection: 'tests',
    data: {
      title: 'Общий тест №2',
      description: 'Ещё один тест с разными форматами вопросов',
      tariff: tariffId,

      questions: [allQuestions[2].id, allQuestions[3].id, allQuestions[6].id, allQuestions[7].id],
    },
  })

  return [test1, test2]
}
