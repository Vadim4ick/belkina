import { Typography } from '@/shared/ui/typography'
import TestsListItem from './tests-list-item'
import { GetAllUserTestsQuery } from '@/shared/graphql/__generated__'
import { TestsListSkeleton } from './tests-list.skeleton'
import { EmptyDataMessage } from '@/widgets/empty-data-message'

const TestsList = ({
  tests,
  title,
  isLoading,
}: {
  tests?: GetAllUserTestsQuery['GetUserTests']['docs']
  title?: string
  isLoading?: boolean
}) => {
  if (isLoading) {
    return <TestsListSkeleton />
  }

  return (
    <>
      <section className="py-6">
        {tests && tests.length > 0 ? (
          <>
            {title && (
              <Typography tag="h2" variant="poppins-md-24" className="mb-4">
                {title}
              </Typography>
            )}

            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
            >
              {tests.map((test) => (
                <TestsListItem key={test.id} test={test} />
              ))}

              {tests.length < 4 &&
                Array.from({ length: 4 - tests.length }).map((_, i) => <div key={`ph-${i}`} />)}
            </div>
          </>
        ) : (
          <EmptyDataMessage
            title="Тесты не найдены"
            message="Измените параметры поиска или попробуйте снова."
          />
        )}
      </section>
    </>
  )
}

export { TestsList }
