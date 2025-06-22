'use client'

import { useSession } from 'next-auth/react'
import { createGqlClient } from './client'

export const useGqlClient = () => {
  const { data: session } = useSession()

  const token = session?.tokens?.accessToken || null
  return createGqlClient(token)
}
