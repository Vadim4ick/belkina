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

    case 'matching': {
      const pairsCount = question.matchingPairs.length

      return z.object({
        [key]: z.object({
          /** Строка вида "132", длина = количеству пар */
          answer: z
            .string()
            .trim()
            .min(pairsCount, `Введите ${pairsCount} символ${pairsCount === 1 ? '' : 'а'}`)
            .max(pairsCount, `Введите ровно ${pairsCount} символ${pairsCount === 1 ? '' : 'а'}`)
            .regex(
              new RegExp(`^[1-${pairsCount}]+$`),
              `Допустимы только цифры 1‑${pairsCount} без пробелов`,
            )
            .refine(
              (val) => new Set(val.split('')).size === pairsCount,
              'Цифры не должны повторяться',
            ),

          shuffled: z
            .array(
              z.object({
                id: z.string(),
                left: z.string(),
                right: z.string(),
              }),
            )
            .length(pairsCount),
        }),
      })
    }

    default:
      return z.object({})
  }
}
