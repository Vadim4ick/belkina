import { GraphQLClient } from 'graphql-request'
import * as generated from './__generated__'

import 'dotenv/config'

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
    new GraphQLClient(process.env.NEXT_PUBLIC_PAYLOAD_GRAPHQL!, {
      fetch: tags && nextFetchWithTags(tags || []),
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
  )
}

export const gql = createGqlClient({})

export * from './__generated__'
