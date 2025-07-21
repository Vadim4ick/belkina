'use server'

import { gql } from '../graphql/client'
import { CacheKeys } from '../redis/cache-keys'
import { withRedisCache } from '../redis/gqlCached'

export async function fetchMeDto(email: string) {
  const res = await gql.GetUserByEmail({ email: email })
  return res.Users?.docs?.[0] || null
}

export const getMeCached = withRedisCache(fetchMeDto, {
  ttl: 120,
  tags: ([email]) => [CacheKeys.tags.getMe(email)],
  name: 'fetchMe',
})
