'use server'

import { CacheKeys } from '../redis/cache-keys'
import { withRedisCache } from '../redis/gqlCached'
import { getServerAuthGqlClient } from './getServerAuthGqlClient'

export async function fetchTestById({ id }: { id: string }) {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetByIdTest({ id: Number(id) })
}

export async function fetchTestHistoryByUserId({ userId }: { userId: string }) {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetTestResHistory({ userId: userId })
}

export const getTestById = withRedisCache(fetchTestById, {
  ttl: 180,
  tags: ([{ id }]) => {
    return [CacheKeys.tags.testById(id)]
  },
})

export const getTestHistoryByUserId = withRedisCache(fetchTestHistoryByUserId, {
  ttl: 180,
  tags: ([{ userId }]) => {
    return [CacheKeys.tags.testHistory(userId)]
  },
})
