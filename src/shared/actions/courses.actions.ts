'use server'

import { CacheKeys } from '../redis/cache-keys'
import { withRedisCache } from '../redis/gqlCached'
import { getServerAuthGqlClient } from './getServerAuthGqlClient'

export async function fetchCoursesBySlug({ slug }: { slug: string }) {
  const gql = await getServerAuthGqlClient({})

  return gql.GetCourseBySlug({
    slug,
  })
}

export const getCoursesBySlug = withRedisCache(fetchCoursesBySlug, {
  ttl: 180,
  tags: () => {
    return [CacheKeys.tags.courseBySlug()]
  },
})
