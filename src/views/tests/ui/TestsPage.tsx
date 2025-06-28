import { getServerGqlClient } from '@/shared/graphql/client'
import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'

const TestsPage = async () => {
  const gql = await getServerGqlClient()

  const res = await gql.GetAllTests()

  return (
    <section className="max-mobile:py-6 py-12">
      <Typography tag="h1" variant="visuelt-bold-48" className="mb-6">
        Тесты
      </Typography>

      <TestsList tests={res.Tests.docs} />

      <TestsList title="Пройденные" />
      <TestsList title="Тесты доступные в другом тарифе" />
    </section>
  )
}

export { TestsPage }
