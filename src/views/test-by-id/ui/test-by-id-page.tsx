import { TestForm } from '@/features/test-form'
import { getTestById } from '@/shared/actions/test.action'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import { notFound } from 'next/navigation'

const TestByIdPage = async ({ id }: { id: string }) => {
  try {
    const res = await getTestById({ id })

    // Даже если нет ошибки, но `Test` = null (например, удалённый тест)
    if (!res?.Test) {
      return notFound()
    }

    const test = res.Test

    return (
      <section className="max-mobile:py-6 mb-12 py-12">
        <Container className="flex flex-col gap-y-21">
          <Typography tag="h1" variant="visuelt-bold-48">
            {test.title}
          </Typography>

          <TestForm test={test} />
        </Container>
      </section>
    )
  } catch {
    // GraphQL-ошибка типа NotFound тоже сюда попадёт
    return notFound()
  }
}

export { TestByIdPage }
