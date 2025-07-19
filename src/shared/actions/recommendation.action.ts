'use server'

import { CacheKeys } from '../redis/cache-keys'
import { withRedisCache } from '../redis/gqlCached'
import { getServerAuthGqlClient } from './getServerAuthGqlClient'

export async function fetchRecommendations({ userId }: { userId: string }) {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetRecomendations({
    userId: Number(userId),
  })
}

export const getRecommendations = withRedisCache(fetchRecommendations, {
  ttl: 180,
  tags: ([{ userId }]) => {
    return [CacheKeys.tags.recommendationsAll(), CacheKeys.tags.recommendations(userId)]
  },
})
