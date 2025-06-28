import { Typography } from '@/shared/ui/typography'
import TestsListItem from './tests-list-item'
import { GetAllTestsQuery } from '@/shared/graphql/__generated__'

export interface ITestsListItem {
  id: string
  name: string
  topic: string
  slug: string
}

const TestsList = ({
  tests,
  title,
}: {
  tests?: GetAllTestsQuery['Tests']['docs']
  title?: string
}) => {
  return (
    <>
      {tests && tests.length > 0 && (
        <section className="py-6">
          {title && (
            <Typography tag="h2" variant="poppins-md-24" className="mb-4">
              {title}
            </Typography>
          )}

          {tests && (
            <div className="border-light-grey flex flex-col gap-3 rounded-xl py-6 md:py-5">
              {tests.map((test, idx) => (
                <TestsListItem className="border-light-grey border-b-2" key={idx} test={test} />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  )
}

export { TestsList }
