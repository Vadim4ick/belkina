import { GetTestResHistoryQuery } from '@/shared/graphql/__generated__'
import { cn } from '@/shared/lib/utils'
import { Typography } from '@/shared/ui/typography'
import TestHistoryItem from '@/widgets/tests-history/ui/test-history-item'

const TestsHistory = ({
  testHistory,
}: {
  testHistory?: GetTestResHistoryQuery['TestResults']['docs']
}) => {
  return (
    <section className="py-6">
      <Typography tag="h2" variant="poppins-md-24" className="mb-4">
        История прохождения тестов
      </Typography>

      <div
        className={cn(
          'bg-light-grey flex flex-col gap-3 rounded-xl px-3 md:px-6',
          testHistory?.length === 0 ? 'py-12' : 'py-6',
        )}
      >
        {testHistory &&
          testHistory?.length > 0 &&
          testHistory.map((test, idx) => <TestHistoryItem key={idx} test={test} />)}

        {testHistory && testHistory?.length === 0 && (
          <Typography className="text-gray text-center" tag="p" variant="poppins-md-24">
            Вы еще не проходили ни один тест
          </Typography>
        )}
      </div>
    </section>
  )
}

export { TestsHistory }
