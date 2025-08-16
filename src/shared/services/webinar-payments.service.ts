import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

type CreateWebinarPaymentArgs = {
  webinarId: number
  userId: number
  userEmail?: string
  webinarSlug?: string
}

export const useCreateWebinarPayment = () => {
  return useMutation({
    mutationKey: ['createWebinarPayment'],
    mutationFn: async ({ webinarId, userId, userEmail, webinarSlug }: CreateWebinarPaymentArgs) => {
      if (!webinarId) throw new Error('Missing webinarId')
      if (!userId) throw new Error('Missing userId')
      if (!userEmail) throw new Error('Missing userEmail')
      if (!webinarSlug) throw new Error('Missing webinarSlug')

      try {
        const res = await fetch(`/api/payments/create`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ webinarId, userId, userEmail, webinarSlug }),
        })

        const data = await res.json()
        if (!res.ok) {
          throw new Error(data?.message || 'Ошибка при создании платежа')
        }

        if (data.confirmationUrl) {
          window.location.href = data.confirmationUrl // редирект прямо тут
        } else {
          toast.error('Не удалось получить ссылку на оплату')
        }

        return data
      } catch (err) {
        console.error('createWebinarPayment', err)
        throw err
      }
    },
  })
}
