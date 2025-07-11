'use client'

import { createGqlClient } from '../graphql/client'
import { useAuthStore } from './use-auth-store'

export const useGqlClient = ({ tags }: { tags?: string[] }) => {
  const session = useAuthStore((state) => state.session)

  const token = session?.tokens?.accessToken
  return createGqlClient({
    token,
    tags,
  })
}
