import { useProfileStore } from '@/entities/user/use-profile-store'
import { useQuery } from '@tanstack/react-query'
import { useGqlClient } from './useGqlClient'
import { useSession } from 'next-auth/react'

export const useProfile = () => {
  const { setProfile, profile } = useProfileStore()

  const session = useSession()

  const gql = useGqlClient({})

  const query = useQuery({
    queryKey: ['me'],
    enabled: !!session.data?.user.email,
    queryFn: async () => {
      const res = await gql.GetUserByEmail({
        email: session.data?.user.email,
      })

      const user = res.Users?.docs?.[0] || null
      setProfile(user)

      return user
    },
  })

  return { ...query, profile }
}
