'use client'

import { TestResult_Status } from '@/shared/graphql/client'
import { useGetAllTests, useUserByIdTestResult } from '@/shared/services/test.service'
import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'
import { memo } from 'react'

const TestsPage = memo(() => {
  const { data: res, isLoading } = useGetAllTests()
  const { data: resultsRes, isLoading: resultsLoading } = useUserByIdTestResult()

  const resultsMap = new Map<number, TestResult_Status>()

  resultsRes?.TestResults.docs.forEach((res) => {
    resultsMap.set(res.test.id, res.status)
  })

  const completedTests = res?.Tests.docs.filter((test) => resultsMap.get(test.id) === 'completed')
  const inProgressTests = res?.Tests.docs.filter(
    (test) => resultsMap.get(test.id) === 'in_progress',
  )
  const notStartedTests = res?.Tests.docs.filter((test) => !resultsMap.has(test.id))

  return (
    <section className="max-mobile:py-6 py-12">
      <div className="mb-6 flex items-center justify-between gap-2">
        <Typography tag="h1" variant="visuelt-bold-48">
          Тесты
        </Typography>

        {/* <TabCategory
          btns={[
            {
              id: 0,
              title: 'Все',
            },
            {
              id: 1,
              title: 'Начатые',
            },
            {
              id: 2,
              title: 'Пройденные',
            },
            {
              id: 3,
              title: 'В процессе',
            },
          ]}
          name="exams"
        /> */}
      </div>

      <TestsList
        title="Не начатые"
        tests={notStartedTests}
        isLoading={isLoading || resultsLoading}
      />
      <TestsList
        title="В процессе"
        tests={inProgressTests}
        isLoading={isLoading || resultsLoading}
      />
      <TestsList
        title="Пройденные"
        tests={completedTests}
        isLoading={isLoading || resultsLoading}
      />
    </section>
  )
})

export { TestsPage }
