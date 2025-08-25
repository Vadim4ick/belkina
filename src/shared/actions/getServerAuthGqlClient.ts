'use server'

import { cookies } from 'next/headers'
import { createGqlClient } from '../graphql/client'

export const getServerAuthGqlClient = async ({
  tags,
  extraHeaders,
}: { tags?: string[]; extraHeaders?: Record<string, string> } = {}) => {
  const token = (await cookies()).get('accessToken')?.value

  return createGqlClient({ token, tags, extraHeaders })
}
