/* eslint-disable @typescript-eslint/ban-ts-comment */
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
      userId: string
      status?: TestResult_Status_All | undefined
      examId: number
      subjectId: number
    },
  ) => {
    const gql = await getServerAuthGqlClient({})

    // 1. Получаем все тесты
    // @ts-ignore
    const allTests = await gql.GetAllTests({
      examId,
      subjectId,
    })
    // const allTests = await gql.GetAllTests({
    //   limit,
    //   page,
    // })

    // 2. Получаем результаты
    const userResults = await gql.GetUserByIdTestResult({
      userId,
    })

    // 3. Map для быстрого поиска
    const resultMap = new Map(userResults.TestResults.docs.map((r) => [r.test.id, r.status]))

    // 4. Добавляем статус каждому тесту
    let docsWithStatus = allTests.Tests.docs.map((test) => {
      const testStatus = resultMap.get(test.id) || 'not_started'
      return {
        id: test.id,
        title: test.title,
        description: test.description,
        status: testStatus,
      }
    })

    // 5. Фильтрация по статусу (если указано)
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
