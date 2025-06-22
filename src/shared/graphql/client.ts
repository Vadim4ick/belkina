import { GraphQLClient } from 'graphql-request'
import { getSdk } from './__generated__'
import { auth } from '@/entities/user/auth'

export const PAYLOAD_URL: string = (() => {
  const url = process.env.PAYLOAD_GRAPHQL
  if (!url) throw new Error('Environment variable PAYLOAD_GRAPHQL is not set')
  return url
})()

export const createGqlClient = (token?: string | null) => {
  return getSdk(
    new GraphQLClient(PAYLOAD_URL, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
  )
}

export const getServerGqlClient = async () => {
  const session = await auth()
  const token = session?.tokens?.accessToken
  return createGqlClient(token)
}

export const gql = createGqlClient()

export * from './__generated__'
