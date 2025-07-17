'use client'

import { useQuery } from '@tanstack/react-query'
import { useGqlClient } from '../hooks/useGqlClient'

export const QUERY_KEYS = {
  getAllTariffs: () => ['tariffs_all'],
}

export const useGetAllTariffs = () => {
  const gql = useGqlClient({})

  return useQuery({
    queryKey: QUERY_KEYS.getAllTariffs(),
    queryFn: async () => {
      try {
        return await gql.GetTaraffis()
      } catch (err) {
        console.error('getAllTariffs', err)
        throw err
      }
    },
  })
}
