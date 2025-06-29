import { GetTestResHistoryQuery } from '@/shared/graphql/__generated__'
import { Typography } from '@/shared/ui/typography'
import TestHistoryItem from '@/widgets/tests-history/ui/test-history-item'

const TestsHistory = ({
  testHistory,
}: {
  testHistory: GetTestResHistoryQuery['TestResults']['docs']
}) => {
  return (
    <section className="py-6">
      <Typography tag="h2" variant="poppins-md-24" className="mb-4">
        История тестов
      </Typography>
      <div className="bg-light-grey flex flex-col gap-3 rounded-xl px-3 py-6 md:px-6 md:py-5">
        {testHistory.map((test, idx) => (
          <TestHistoryItem key={idx} test={test} />
        ))}
      </div>
    </section>
  )
}

export { TestsHistory }
