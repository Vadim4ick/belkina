import { Typography } from '@/shared/ui/typography'
import TestsListItem from './tests-list-item'
import { GetAllUserTestsQuery } from '@/shared/graphql/__generated__'
import { TestsListSkeleton } from './tests-list.skeleton'

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

            {tests && (
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                }}
              >
                {tests.map((test, idx) => (
                  <TestsListItem className="border-light-grey border-b-2" key={idx} test={test} />
                ))}
              </div>
            )}
          </>
        ) : (
          <Typography className="mt-4 text-center" tag="p" variant="visuelt-bold-32">
            Тестов не найдено
          </Typography>
        )}
      </section>
    </>
  )
}

export { TestsList }
