import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import { TestFragmentFragment } from '@/shared/graphql/__generated__'
import { getRouteTestById } from '@/shared/lib/routes'
import { StatusTestResult } from '@/entities/test'
import { TEST_BTN_TEXT } from '../model/const'

interface TestsListItemProps {
  test: TestFragmentFragment
  className?: string
  type: StatusTestResult
}

const TestsListItem = ({ test, className, type }: TestsListItemProps) => {
  return (
    <div
      className={cn(
        'max-tablet:flex-col flex items-center justify-between gap-3 rounded-[6px] bg-white px-2.5 py-3',
        className,
      )}
    >
      <div className="lg:col-span-4">
        <Typography tag="p" variant="poppins-reg-14" className="text-[#6B7280] uppercase">
          {test.title}
        </Typography>
      </div>

      <div className="lg:col-span-2 lg:col-start-5">
        <Typography tag="p" variant="poppins-reg-14" className="text-center text-[#6B7280]">
          {test.description}
        </Typography>
      </div>

      <div className="justify-self-end lg:col-span-2 lg:col-start-7">
        <Link href={getRouteTestById({ id: test.id })}>
          <Button variant="primary-inverted" className="w-[288px]">
            {TEST_BTN_TEXT[type]}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default TestsListItem
