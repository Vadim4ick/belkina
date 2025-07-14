'use client'

import { createGqlClient } from '../graphql/client'
import Cookies from 'js-cookie'

export const useGqlClient = ({ tags }: { tags?: string[] }) => {
  const token = Cookies.get('accessToken')

  return createGqlClient({
    token,
    tags,
  })
}
