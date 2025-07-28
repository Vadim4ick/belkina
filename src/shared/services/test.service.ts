/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useGqlClient } from '../hooks/useGqlClient'

import {
  TestResult_Status_All,
  TestResultUpdate_Status_MutationInput,
} from '../graphql/__generated__'
import type { AnswerInput } from '@/features/test-form'
import { useProfileStore } from '@/entities/user/use-profile-store'

export const QUERY_KEYS = {
  testResult: (userId?: string | number, testId?: number) => ['testResult', userId, testId],
  allUserTests: (
    userId?: string | number,
    params?: { status?: string; examId?: number; subjectId?: number; testIds?: number[] },
  ) => [
    'allUserTests',
    userId,
    params?.status || null,
    params?.examId || null,
    params?.subjectId || null,
    params?.testIds || null,
  ],
}

export const useCreateTestResult = () => {
  const gql = useGqlClient({})

  const profile = useProfileStore()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['createTestResult', profile.profile?.id],

    mutationFn: async ({ testId }: { testId: number }) => {
      try {
        await gql.CreateTestResult({
          testId: testId,
          userId: Number(profile.profile?.id),
        })
      } catch (err) {
        console.error('createTestResult', err)

        throw err
      }
    },

    onSuccess: (_, { testId }) => {
      if (profile.profile?.id && testId) {
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.testResult(profile.profile.id, testId),
        })

        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.allUserTests(profile.profile.id),
        })
      }
    },
  })
}

export const useGetTestResultById = ({ testId, userId }: { testId?: number; userId?: number }) => {
  const gql = useGqlClient({})

  const profile = useProfileStore()

  const user_id = profile.profile?.id || userId

  return useQuery({
    queryKey: QUERY_KEYS.testResult(user_id, testId!),
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
    enabled: !!profile.profile?.id && !!testId,
  })
}

export const useUpdateTestResult = () => {
  const gql = useGqlClient({})

  const profile = useProfileStore()

  return useMutation({
    mutationKey: ['updateTestResult', profile.profile?.id],

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

export const useGetAllUserTests = ({
  status,
  examId,
  subjectId,
}: {
  status?: TestResult_Status_All
  examId?: number
  subjectId?: number
}) => {
  const gql = useGqlClient({})

  const profile = useProfileStore()

  return useQuery({
    queryKey: QUERY_KEYS.allUserTests(profile.profile?.id, { status, examId, subjectId }),
    queryFn: async () => {
      const variables: Record<string, any> = {
        ...(profile.profile?.id && { userId: Number(profile.profile.id) }),
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

    // enabled: !!profile.profile?.id,
  })
}
