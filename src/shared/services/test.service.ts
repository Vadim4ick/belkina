import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useGqlClient } from '../hooks/useGqlClient'
import { useAuthStore } from '../hooks/use-auth-store'
import { TestResultUpdate_Status_MutationInput } from '../graphql/__generated__'
import type { AnswerInput } from '@/features/test-form'

export const useCreateTestResult = () => {
  const gql = useGqlClient()
  const session = useAuthStore((state) => state.session)

  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['createTestResult', session?.user?.id],

    mutationFn: async ({ testId }: { testId: number }) => {
      try {
        await gql.CreateTestResult({
          testId: testId,
          userId: Number(session?.user?.id),
        })
      } catch (err) {
        console.error('createTestResult', err)

        throw err
      }
    },

    onSuccess: (_, { testId }) => {
      if (session?.user?.id && testId) {
        queryClient.invalidateQueries({
          queryKey: ['getTestResultById', session.user.id, testId],
        })
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
        return await gql.GetByIdTestResult({
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

export const useUpdateTestResult = () => {
  const gql = useGqlClient()
  const session = useAuthStore((state) => state.session)

  return useMutation({
    mutationKey: ['updateTestResult', session?.user?.id],

    mutationFn: async ({
      testResId,
      answers,
      status = 'in_progress',
    }: {
      testResId?: number
      answers: AnswerInput[]
      status?: TestResultUpdate_Status_MutationInput
    }) => {
      try {
        if (!testResId) {
          throw new Error('Missing testResId')
        }

        await gql.UpdateTestResult({
          testResId: testResId,

          // @ts-ignore
          answers: answers,
          status: status,
        })
      } catch (err) {
        console.error('updateTestResult', err)

        throw err
      }
    },
  })
}
