'use server'

import { CacheKeys } from '../redis/cache-keys'
import { withRedisCache } from '../redis/gqlCached'
import { getServerAuthGqlClient } from './getServerAuthGqlClient'

async function fetchHomePage() {
  const gql = await getServerAuthGqlClient({})
  return gql.GetHomePage()
}
export const getHomePage = withRedisCache(fetchHomePage, {
  ttl: 360,
  tags: () => [CacheKeys.tags.getHomePage()],
  name: 'fetchHomePage',
})
