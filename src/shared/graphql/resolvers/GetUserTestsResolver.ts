/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'
import { TestResult_Status_All } from '../client'

export const GetUserTestsResolver = {
  resolve: async (
    _: any,
    {
      userId,
      status,
      examId,
      subjectId,
    }: {
      userId?: string
      status?: TestResult_Status_All
      examId: number
      subjectId: number
    },
  ) => {
    const gql = await getServerAuthGqlClient({})

    const allTests = await gql.GetTestsByIds({
      examId,
      subjectId,
      limit: 1000,
      page: 1,
    })

    // 2. Получаем результаты только если есть userId
    let resultMap = new Map<number, TestResult_Status_All>()

    if (userId) {
      const userResults = await gql.GetUserByIdTestResult({ userId })
      resultMap = new Map(userResults.TestResults.docs.map((r) => [r.test.id, r.status]))
    }

    // 3. Добавляем статус
    let docsWithStatus = allTests.Tests.docs.map((test) => {
      const testStatus = resultMap.get(test.id) || 'not_started'
      return {
        id: test.id,
        title: test.title,
        description: test.description,
        status: testStatus,
      }
    })

    // 4. Фильтрация по статусу (если передан)
    if (status) {
      docsWithStatus = docsWithStatus.filter((t) => t.status === status)
    }

    return {
      docs: docsWithStatus,
      page: allTests.Tests.page,
      totalPages: allTests.Tests.totalPages,
      totalDocs: allTests.Tests.totalDocs,
    }
  },
}
