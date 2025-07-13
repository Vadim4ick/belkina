import { TestForm } from '@/features/test-form'
import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'
import { Typography } from '@/shared/ui/typography'
import { notFound } from 'next/navigation'

const TestByIdPage = async ({ id }: { id: string }) => {
  const gql = await getServerAuthGqlClient({})

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
      </section>
    )
  } catch {
    // GraphQL-ошибка типа NotFound тоже сюда попадёт
    return notFound()
  }
}

export { TestByIdPage }
