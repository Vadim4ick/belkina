import { GraphQLClient } from 'graphql-request'
import { getSdk } from './__generated__'

export const PAYLOAD_URL: string = (() => {
  const url = process.env.PAYLOAD_GRAPHQL
  if (!url) throw new Error('Environment variable PAYLOAD_GRAPHQL is not set')
  return url
})()

const client = new GraphQLClient(PAYLOAD_URL, {})

export const createGqlClient = (token?: string | null) => {
  return getSdk(
    new GraphQLClient(PAYLOAD_URL, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
  )
}

export const gql = getSdk(client)

export * from './__generated__'
