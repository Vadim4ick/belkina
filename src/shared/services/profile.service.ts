/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useProfileStore } from '@/entities/user/use-profile-store'
import { toast } from 'sonner'
import { authService } from './auth.service'

type UpdateUserArgs = {
  mutationKey?: string[]
  variables: any // переменные для gqlFn
  invalidateMe?: boolean // если нужно инвалидировать `me`
}

export const useUpdateUser = () => {
  const profile = useProfileStore()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['updateUser', profile.profile?.id],

    mutationFn: async ({ variables }: Omit<UpdateUserArgs, 'mutationKey' | 'invalidateMe'>) => {
      return await authService.profileUpdate(variables)
    },

    onSuccess: () => {
      toast.success('Данные успешно обновлены')

      queryClient.invalidateQueries({ queryKey: ['me'] })
    },

    onError: (error) => {
      toast.error(error.message ?? 'Произошла ошибка при обновлении')
    },
  })
}
