import { useQuery } from '@tanstack/react-query'
import { useGqlClient } from '../hooks/useGqlClient'
import { useProfileStore } from '@/entities/user/use-profile-store'

export const useGetWebinarPayment = ({ webinarId }: { webinarId: number }) => {
  const gql = useGqlClient({})

  const { profile } = useProfileStore()

  return useQuery({
    queryKey: ['getWebinarPayment', profile?.id, webinarId],
    queryFn: async () => {
      try {
        return await gql.GetWebinarPaymentByUserId({
          userId: profile?.id,
          webinarId: webinarId,
        })
      } catch (err) {
        console.error('getAllCourses', err)
        throw err
      }
    },
    enabled: !!profile?.id && !!webinarId,
  })
}
