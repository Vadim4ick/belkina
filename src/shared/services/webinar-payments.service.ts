import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useGqlClient } from '../hooks/useGqlClient'
import { useProfileStore } from '@/entities/user/use-profile-store'

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
        toast.error((err as Error).message ?? 'Произошла ошибка при создании платежа')
        throw err
      }
    },
  })
}

export const useGetInfoWebinarPaymentByWebinarId = ({ webinarId }: { webinarId: number }) => {
  const gql = useGqlClient({})

  return useQuery({
    queryKey: ['getInfoWebinarPayment', webinarId],
    queryFn: async () => {
      try {
        return await gql.GetInfoWebinarPaymentsByWebinarId({
          webinarId: webinarId,
        })
      } catch (err) {
        console.error('getInfoWebinarPayment', err)
        throw err
      }
    },
    enabled: !!webinarId,
  })
}

export const useGetWebinarPaymentByUser = () => {
  const gql = useGqlClient({})

  const { profile } = useProfileStore()

  return useQuery({
    queryKey: ['GetWebinarPaymentByUser', profile?.id],
    queryFn: async () => {
      try {
        return await gql.GetWebinarPaymentByUser({
          userId: profile?.id,
        })
      } catch (err) {
        console.error('GetWebinarPaymentByUser', err)
        throw err
      }
    },
    enabled: !!profile?.id,
  })
}
