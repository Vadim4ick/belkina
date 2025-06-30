import { QuestionFragmentFragment } from '@/shared/graphql/__generated__'
import { z } from 'zod'

export const createStepSchema = (question: QuestionFragmentFragment) => {
  const key = `q_${question.id}`

  switch (question.questionType) {
    case 'text_input':
      return z.object({
        [key]: z.string().min(1, 'Обязательное поле'),
      })

    case 'single_choice':
      return z.object({
        [key]: z.string().min(1, 'Выберите вариант'),
      })

    case 'multiple_choice':
      return z.object({
        [key]: z.array(z.string()).min(1, 'Выберите хотя бы один вариант'),
      })

    // case 'matching':
    //   return z.object({
    //     [key]: z.object({
    //       userAnswer: z
    //         .record(z.string().regex(/^\d+$/, 'Ответ должен быть числом'))
    //         .refine((obj) => Object.keys(obj).length === question.matchingPairs.length, {
    //           message: 'Заполните все поля',
    //         })
    //         .refine((obj) => Object.values(obj).every((v) => v.trim() !== ''), {
    //           message: 'Заполните все поля',
    //         }),
    //     }),
    //   })

    default:
      return z.object({})
  }
}
