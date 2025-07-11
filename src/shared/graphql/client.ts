import { GraphQLClient } from 'graphql-request'
import * as generated from './__generated__'
import { auth } from '@/entities/user/auth'

// import dotenv from 'dotenv'

// dotenv.config({
//   path: '.env',
// })

export const PAYLOAD_URL: string = (() => {
  const url = process.env.NEXT_PUBLIC_PAYLOAD_GRAPHQL
  if (!url) throw new Error('Environment variable NEXT_PUBLIC_PAYLOAD_GRAPHQL is not set')
  return url
})()

export const nextFetchWithTags = (tags: string[]) => {
  const nextFetch = (input: RequestInfo, init?: RequestInit) => {
    return fetch(input, {
      ...init,
      next: { tags },
    } as any)
  }

  return nextFetch as unknown as typeof globalThis.fetch
}

export const createGqlClient = ({ token, tags }: { token?: string; tags?: string[] } = {}) => {
  // Проверка на случай пустого файла './__generated__'
  // if (Object.keys(generated).length === 0) return

  return generated.getSdk(
    new GraphQLClient(PAYLOAD_URL, {
      fetch: tags && nextFetchWithTags(tags || []),
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
  )
}

export const getServerAuthGqlClient = async ({ tags }: { tags?: string[] }) => {
  const session = await auth()
  const token = session?.tokens?.accessToken
  return createGqlClient({ token, tags })
}

export const gql = createGqlClient({})

export * from './__generated__'
