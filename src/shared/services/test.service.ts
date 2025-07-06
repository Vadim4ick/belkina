/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useGqlClient } from '../hooks/useGqlClient'
import { useAuthStore } from '../hooks/use-auth-store'
import {
  TestResult_Status_All,
  TestResultUpdate_Status_MutationInput,
} from '../graphql/__generated__'
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

export const useGetTestResultById = ({ testId, userId }: { testId?: number; userId?: string }) => {
  const gql = useGqlClient()

  const session = useAuthStore((state) => state.session)

  const user_id = session?.user?.id || userId

  return useQuery({
    queryKey: ['getTestResultById', user_id, testId],
    queryFn: async ({ queryKey }) => {
      const [, user_id, testId] = queryKey

      if (!user_id || !testId) throw new Error('Missing testId or userId')

      try {
        return await gql.GetByIdTestResult({
          testId: Number(testId),
          userId: Number(user_id),
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

export const useGetAllTests = () => {
  const gql = useGqlClient()

  return useQuery({
    queryKey: ['getAllTests'],
    queryFn: async () => {
      try {
        return await gql.GetAllTests()
      } catch (err) {
        console.error('getAllTests', err)
        throw err
      }
    },
  })
}

export const useUserByIdTestResult = () => {
  const gql = useGqlClient()

  const session = useAuthStore((state) => state.session)

  return useQuery({
    queryKey: ['getUserByIdTestResult', session?.user.id],
    queryFn: async () => {
      try {
        return await gql.GetUserByIdTestResult({
          userId: Number(session?.user?.id),
        })
      } catch (err) {
        console.error('getUserByIdTestResult', err)
        throw err
      }
    },
  })
}

export const useGetAllUserTests = ({
  status,
  examId,
  subjectId,
}: {
  status?: TestResult_Status_All
  examId?: number
  subjectId?: number
}) => {
  const gql = useGqlClient()

  const session = useAuthStore((state) => state.session)

  return useQuery({
    queryKey: ['getAllUserTests', session?.user.id, status, examId, subjectId],
    queryFn: async () => {
      const variables: Record<string, any> = {
        userId: Number(session?.user?.id),
      }

      if (status) {
        variables.status = status
      }

      if (examId) {
        variables.examId = examId
      }

      if (subjectId) {
        variables.subjectId = subjectId
      }

      try {
        // @ts-ignore
        return await gql.GetAllUserTests(variables)
      } catch (err) {
        console.error('getAllUserTests', err)
        throw err
      }
    },

    enabled: !!session?.user?.id,
  })
}
