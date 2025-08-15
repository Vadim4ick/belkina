import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useCreateWebinarPayment = ({
  webinarId,
  price,
  userId,
}: {
  webinarId: number
  price: number
  userId: number
}) => {
  return useMutation({
    mutationKey: ['createWebinarPayment', webinarId, userId, price],
    mutationFn: async () => {
      try {
        const res = await fetch(`/api/payments/create`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ webinarId, userId, price }),
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
