import { Typography } from '@/shared/ui/typography'
import TestHistoryItem from '@/widgets/tests-history/ui/test-history-item'

export interface ITestsHystoryListItem {
  name: string
  date: string
  status: 'Пройдено' | 'Не Пройдено'
}

export const testsHystoryList: ITestsHystoryListItem[] = [
  { name: 'Тест на определение уровня', date: '22:00 23.05.2022', status: 'Пройдено' },
  { name: 'Тест по русскому языку', date: '22:00 23.05.2022', status: 'Пройдено' },
  { name: 'Тест по русскому языку', date: '22:00 23.05.2022', status: 'Не Пройдено' },
  { name: 'Тест по русскому языку', date: '22:00 23.05.2022', status: 'Не Пройдено' },
]

const TestsHistory = () => {
  return (
    <section className="py-6">
      <Typography tag="h2" variant="poppins-md-24" className="mb-4">
        История тестов
      </Typography>
      <div className="bg-light-grey flex flex-col gap-3 rounded-xl px-3 py-6 md:px-6 md:py-5">
        {testsHystoryList.map((test, idx) => (
          <TestHistoryItem key={idx} test={test} />
        ))}
      </div>
    </section>
  )
}

export { TestsHistory }
