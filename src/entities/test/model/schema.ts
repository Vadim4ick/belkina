import { QuestionFragmentFragment } from '@/shared/graphql/__generated__'
import { z } from 'zod'

export const createStepSchema = (question: QuestionFragmentFragment) => {
  switch (question.questionType) {
    case 'text_input':
      return z.object({
        [`q_${question.id}`]: z.string().min(1, 'Обязательное поле'),
      })

    case 'single_choice':
      return z.object({
        [`q_${question.id}`]: z.string().min(1, 'Выберите вариант'),
      })

    case 'multiple_choice':
      return z.object({
        [`q_${question.id}`]: z.array(z.string()).min(1, 'Выберите хотя бы один вариант'),
      })

    // case 'matching':
    //   return z.object({
    //     [`q_${question.id}`]: z
    //       .record(z.string())
    //       .refine((obj) => Object.keys(obj).length === question.matchingPairs.length, {
    //         message: 'Заполните все поля',
    //       })
    //       .refine((obj) => Object.values(obj).every((v) => v.trim() !== ''), {
    //         message: 'Заполните все поля',
    //       }),
    //   })

    default:
      return z.object({})
  }
}
