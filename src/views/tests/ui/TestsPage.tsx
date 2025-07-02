import { auth } from '@/entities/user/auth'
import { getServerGqlClient, TestResult_Status } from '@/shared/graphql/client'
import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'

const TestsPage = async () => {
  const gql = await getServerGqlClient()

  const session = await auth()
  const userId = session?.user?.id

  const res = await gql.GetAllTests()
  const resultsRes = await gql.GetUserByIdTestResult({ userId: userId })

  const resultsMap = new Map<number, TestResult_Status>()

  resultsRes.TestResults.docs.forEach((res) => {
    resultsMap.set(res.test.id, res.status)
  })

  const completedTests = res.Tests.docs.filter((test) => resultsMap.get(test.id) === 'completed')
  const inProgressTests = res.Tests.docs.filter((test) => resultsMap.get(test.id) === 'in_progress')
  const notStartedTests = res.Tests.docs.filter((test) => !resultsMap.has(test.id))

  return (
    <section className="max-mobile:py-6 py-12">
      <Typography tag="h1" variant="visuelt-bold-48" className="mb-6">
        Тесты
      </Typography>

      <TestsList title="Не начатые" tests={notStartedTests} />
      <TestsList title="В процессе" tests={inProgressTests} />
      <TestsList title="Пройденные" tests={completedTests} />
    </section>
  )
}

export { TestsPage }
