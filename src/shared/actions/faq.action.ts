'use server'

import { CacheKeys } from '../redis/cache-keys'
import { withRedisCache } from '../redis/gqlCached'
import { getServerAuthGqlClient } from './getServerAuthGqlClient'

async function fetchFAQ() {
  const gql = await getServerAuthGqlClient({})
  return gql.GetFAGs()
}
export const getFAQ = withRedisCache(fetchFAQ, {
  ttl: 180,
  tags: () => [CacheKeys.tags.getFAQ()],
  name: 'fetchFAQ',
})
