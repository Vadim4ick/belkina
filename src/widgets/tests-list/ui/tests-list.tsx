import { Typography } from '@/shared/ui/typography'
import TestsListItem from './tests-list-item'

export interface ITestsListItem {
  id: string
  name: string
  topic: string
}

export const testsListItem: ITestsListItem[] = [
  { id: '1', name: 'Название теста', topic: 'Тема 1' },
  { id: '2', name: 'Название теста', topic: 'Тема 2' },
  { id: '3', name: 'Название теста', topic: 'Тема 3' },
  { id: '4', name: 'Название теста', topic: 'Тема 4' },
  { id: '5', name: 'Название теста', topic: 'Тема 5' },
]

const TestsList = ({ title }: { title?: string }) => {
  return (
    <section className="py-6">
      <Typography tag="h2" variant="poppins-md-24" className="mb-4">
        {title}
      </Typography>
      <div className="border-light-grey flex flex-col gap-3 rounded-xl py-6 md:py-5">
        {testsListItem.map((test, idx) => (
          <TestsListItem className="border-light-grey border-b-2" key={idx} test={test}/>
        ))}
      </div>
    </section>
  )
}

export { TestsList }
