import { Typography } from '@/shared/ui/typography'
import { ITestsListItem } from './tests-list'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'

interface TestsListItemProps {
  test: ITestsListItem
  className?: string
}

const TestsListItem = ({ test, className }: TestsListItemProps) => {
  return (
    <div
      className={cn(
        'grid items-center gap-3 rounded-[6px] bg-white px-2.5 py-3 lg:grid-cols-8 lg:grid-rows-1',
        className,
      )}
    >
      <div className="lg:col-span-4">
        <Typography tag="p" variant="poppins-reg-14" className="text-[#6B7280] uppercase">
          {test.name}
        </Typography>
      </div>
      <div className="lg:col-span-2 lg:col-start-5">
        <Typography tag="p" variant="poppins-reg-14" className="text-[#6B7280]">
          {test.topic}
        </Typography>
      </div>
      <div className="justify-self-end lg:col-span-2 lg:col-start-7">
        <Button variant="primary-inverted" className="w-[288px]">
          Пройти тест
        </Button>
      </div>
    </div>
  )
}

export default TestsListItem
