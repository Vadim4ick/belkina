import { useMutation, useQuery } from '@tanstack/react-query'
import { useGqlClient } from '../hooks/useGqlClient'
import { useAuthStore } from '../hooks/use-auth-store'

export const useCreateTestResult = () => {
  const gql = useGqlClient()
  const session = useAuthStore((state) => state.session)

  return useMutation({
    mutationKey: ['createTestResult', session?.user?.id],

    mutationFn: async ({ testId }: { testId: number }) => {
      try {
        gql.CreateTestResult({
          testId: testId,
          userId: Number(session?.user?.id),
        })
      } catch (err) {
        console.error('createTestResult', err)

        throw err
      }
    },
  })
}

export const useGetTestResultById = ({ testId }: { testId?: number }) => {
  const gql = useGqlClient()

  const session = useAuthStore((state) => state.session)

  return useQuery({
    queryKey: ['getTestResultById', session?.user?.id, testId],
    queryFn: async ({ queryKey }) => {
      const [, userId, testId] = queryKey

      if (!userId || !testId) throw new Error('Missing testId or userId')

      try {
        return gql.GetByIdTestResult({
          testId: Number(testId),
          userId: Number(userId),
        })
      } catch (err) {
        console.error('getTestResultById', err)
        throw err
      }
    },
    enabled: !!session?.user?.id && !!testId,
  })
}
