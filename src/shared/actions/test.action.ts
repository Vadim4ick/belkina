'use server'

import { CacheKeys } from '../redis/cache-keys'
import { withRedisCache } from '../redis/gqlCached'
import { getServerAuthGqlClient } from './getServerAuthGqlClient'

export async function fetchAllTestsIds() {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetAllTestsByTitles()
}

export async function fetchTestById({ id }: { id: string }) {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetByIdTest({ id: Number(id) })
}

export async function fetchTestHistoryByUserId({
  userId,
  testIds,
}: {
  userId: string
  testIds: number[]
}) {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetTestResHistory({ userId: userId, testIds })
}

export const getFetchAllTestsIds = withRedisCache(fetchAllTestsIds, {
  ttl: 180,
  tags: ([]) => {
    return [CacheKeys.tags.fetchAllTestsIds()]
  },
  name: 'fetchAllTestsIds',
})

export const getTestById = withRedisCache(fetchTestById, {
  ttl: 180,
  tags: ([{ id }]) => {
    return [CacheKeys.tags.testById(id)]
  },
  name: 'fetchTestById',
})

export const getTestHistoryByUserId = withRedisCache(fetchTestHistoryByUserId, {
  ttl: 180,
  tags: ([{ userId }]) => {
    return [CacheKeys.tags.testHistory(userId)]
  },
  name: 'fetchTestHistoryByUserId',
})
