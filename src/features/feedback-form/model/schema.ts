import { z } from "zod";

export const feedbackSchema = z.object({
  email: z.string().email("Введите корректную почту"),
  number: z
    .string()
    .min(10, "Введите номер телефона")
    .regex(/^\+?\d{10,15}$/, "Введите корректный номер"),
});
