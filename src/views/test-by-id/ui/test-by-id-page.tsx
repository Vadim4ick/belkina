import { TestForm } from '@/features/test-form'
import { getServerGqlClient } from '@/shared/graphql/client'
import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'
import { notFound } from 'next/navigation'

const TestByIdPage = async ({ id }: { id: string }) => {
  const gql = await getServerGqlClient()

  try {
    const res = await gql.GetByIdTest({ id: Number(id) })

    // Даже если нет ошибки, но `Test` = null (например, удалённый тест)
    if (!res?.Test) {
      return notFound()
    }

    const test = res.Test

    return (
      <section className="max-mobile:py-6 mb-12 flex flex-col gap-y-21 py-12">
        <Typography tag="h1" variant="visuelt-bold-48">
          {test.title}
        </Typography>

        <TestForm test={test} />

        <TestsList title="Так же рекомендуем" />
      </section>
    )
  } catch {
    // GraphQL-ошибка типа NotFound тоже сюда попадёт
    return notFound()
  }
}

export { TestByIdPage }
