import { useMutation, useQuery } from '@tanstack/react-query'
import { useGqlClient } from '../hooks/useGqlClient'
import { useAuthStore } from '../hooks/use-auth-store'
import { TestResultUpdate_Status_MutationInput } from '../graphql/__generated__'

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

export const useUpdateTestResult = () => {
  const gql = useGqlClient()
  const session = useAuthStore((state) => state.session)

  return useMutation({
    mutationKey: ['updateTestResult', session?.user?.id],

    mutationFn: async ({
      testResId,
      questionId,
      answerJSON,
      isCorrect,
      status = 'in_progress',
    }: {
      testResId: number
      questionId: number
      answerJSON: string
      isCorrect: boolean
      status?: TestResultUpdate_Status_MutationInput
    }) => {
      try {
        gql.UpdateTestResult({
          testResId: testResId,
          questionId: questionId,
          answerJSON: answerJSON,
          isCorrect: isCorrect,
          status: status,
        })
      } catch (err) {
        console.error('updateTestResult', err)

        throw err
      }
    },
  })
}
