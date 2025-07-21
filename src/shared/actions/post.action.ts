'use server'

import { CacheKeys } from '../redis/cache-keys'
import { withRedisCache } from '../redis/gqlCached'
import { getServerAuthGqlClient } from './getServerAuthGqlClient'

async function fetchPosts() {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetPostList({ limit: 6, page: 1 })
}
export const getPosts = withRedisCache(fetchPosts, {
  ttl: 180,
  staticTags: [CacheKeys.tags.posts(), CacheKeys.tags.postsByPage({ page: 1 })],
  name: 'fetchPosts',
})

async function fetchPostsByPage({ page }: { page: number }) {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetPostList({ limit: 6, page: page })
}
export const getPostsByPage = withRedisCache(fetchPostsByPage, {
  ttl: 180,
  tags: ([{ page }]) => [CacheKeys.tags.postsByPage({ page }), CacheKeys.tags.posts()],
  name: 'fetchPostsByPage',
})

async function fetchPostsBySlug({ slug }: { slug: string }) {
  const gql = await getServerAuthGqlClient({})

  return await gql.GetPostBySlug({ slug })
}
export const getPostsBySlug = withRedisCache(fetchPostsBySlug, {
  ttl: 180,
  tags: ([{ slug }]) => [CacheKeys.tags.postBySlug({ slug }), CacheKeys.tags.posts()],
  name: 'fetchPostsBySlug',
})
