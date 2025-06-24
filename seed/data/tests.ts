import payload from 'payload'
import { createQuestions } from './questions'

export const createTests = async () => {
  const allQuestions = await createQuestions()

  const test1 = await payload.create({
    collection: 'tests',
    data: {
      title: 'Общий тест №1',
      description: 'Тест с разными типами вопросов',
      tariff: null,
      questions: [allQuestions[0].id, allQuestions[1].id],
    },
  })

  const test2 = await payload.create({
    collection: 'tests',
    data: {
      title: 'Общий тест №2',
      description: 'Ещё один тест с разными форматами вопросов',
      tariff: null,
      questions: [allQuestions[2].id, allQuestions[3].id],
    },
  })

  return [test1, test2]
}
