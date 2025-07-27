import { useProfileStore } from '@/entities/user/use-profile-store'
import { useMutation, useQuery } from '@tanstack/react-query'
import { authService } from '../services/auth.service'
import { useRouter } from 'next/navigation'
import { getRouteHome } from '../lib/routes'

export const useProfile = () => {
  const { setProfile, profile } = useProfileStore()

  const query = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const res = await authService.getMe()
      setProfile(res.user)
      return res.user
    },
  })

  return { ...query, profile }
}

export const useLogout = () => {
  const { setProfile } = useProfileStore()
  const router = useRouter()

  return useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      await authService.logout()
    },
    onSuccess: () => {
      setProfile(undefined)
      router.push(getRouteHome())
    },
  })
}
