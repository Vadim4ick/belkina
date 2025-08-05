'use server'

import { CacheKeys } from '../redis/cache-keys'
import { withRedisCache } from '../redis/gqlCached'
import { getServerAuthGqlClient } from './getServerAuthGqlClient'

async function fetchWebinars() {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetAllWebinars()
}
export const getWebinars = withRedisCache(fetchWebinars, {
  ttl: 180,
  staticTags: [CacheKeys.tags.webinars()],
  name: 'fetchWebinars',
})

async function fetchWebinarsBySlug({ slug }: { slug: string }) {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetWebinarsBySlug({ slug })
}
export const getWebinarsBySlug = withRedisCache(fetchWebinarsBySlug, {
  ttl: 180,
  tags: ([{ slug }]) => [CacheKeys.tags.webinarBySlug({ slug }), CacheKeys.tags.webinars()],
  name: 'fetchWebinarsBySlug',
})
