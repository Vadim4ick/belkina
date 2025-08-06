// 'use server'

// import { CacheKeys } from '../redis/cache-keys'
// import { withRedisCache } from '../redis/gqlCached'
// import { getServerAuthGqlClient } from './getServerAuthGqlClient'

// async function fetchPurchasesCourses(userId: number) {
//   const gql = await getServerAuthGqlClient({})
//   return gql.GetPurchasesCoursesVideos({ userId })
// }
// export const getPurchasesCourses = withRedisCache(fetchPurchasesCourses, {
//   ttl: 180,
//   tags: ([userId]) => [CacheKeys.tags.purchasesByUser(userId), CacheKeys.tags.purchasesAll()],
//   name: 'fetchPurchasesCourses',
// })
