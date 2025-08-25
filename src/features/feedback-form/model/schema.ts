import { z } from 'zod'

export const feedbackSchema = z.object({
  email: z.string().email('Введите корректную почту'),
})
