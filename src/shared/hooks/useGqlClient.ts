'use client'

import { createGqlClient } from '../graphql/client'
import { useAuthStore } from './use-auth-store'

export const useGqlClient = () => {
  const session = useAuthStore((state) => state.session)

  const token = session?.tokens?.accessToken || null
  return createGqlClient(token)
}
