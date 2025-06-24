import { Typography } from '@/shared/ui/typography'
import TestItem from '@/views/recomendations/ui/test-item'

export interface TestsListItem {
  name: string
  date: string
  status: 'Пройдено' | 'Не Пройдено'
}

export const testsList: TestsListItem[] = [
  { name: 'Тест на определение уровня', date: '22:00 23.05.2022', status: 'Пройдено' },
  { name: 'Тест по русскому языку', date: '22:00 23.05.2022', status: 'Не Пройдено' },
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
        {testsList.map((test, idx) => (
          <TestItem key={idx} test={test} />
        ))}
      </div>
    </section>
  )
}

export { TestsHistory }
