'use server'

import { CacheKeys } from '../redis/cache-keys'
import { withRedisCache } from '../redis/gqlCached'
import { getServerAuthGqlClient } from './getServerAuthGqlClient'

async function fetchExams() {
  const gql = await getServerAuthGqlClient({})

  return gql.GetAllExams()
}
export const getExams = withRedisCache(fetchExams, {
  ttl: 180,
  staticTags: [CacheKeys.tags.examsAll()],
  name: 'getExams',
})

async function fetchSubjects() {
  const gql = await getServerAuthGqlClient({})

  return gql.GetAllSubjects()
}
export const getSubjects = withRedisCache(fetchSubjects, {
  ttl: 180,
  staticTags: [CacheKeys.tags.subjectsAll()],
  name: 'getSubjects',
})
