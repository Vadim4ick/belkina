'use client'

import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import { GetAllUserTestsQuery, TestResult_Status_All } from '@/shared/graphql/__generated__'
import { getRouteTestById } from '@/shared/lib/routes'
import { MAPPING_TEST_HISTORY_MODE, TEST_STATUS_COLOR } from '@/shared/const'
import { useProfileStore } from '@/entities/user/use-profile-store'

interface TestsListItemProps {
  test: GetAllUserTestsQuery['GetUserTests']['docs'][0]
  className?: string
}

const TestsListItem = ({ test, className }: TestsListItemProps) => {
  const { profile } = useProfileStore()

  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <Typography tag="h3" variant="poppins-md-16" className="text-[#111827] uppercase">
          {test.title}
        </Typography>

        {!!profile?.id && (
          <Typography
            tag="span"
            variant="poppins-reg-14"
            className={cn(TEST_STATUS_COLOR[test.status as TestResult_Status_All], 'font-semibold')}
          >
            {MAPPING_TEST_HISTORY_MODE[test.status as TestResult_Status_All]}
          </Typography>
        )}
      </div>

      <Typography tag="p" variant="poppins-reg-14" className="text-[#6B7280]">
        {test.description}
      </Typography>

      <div className="mt-auto">
        <Link href={getRouteTestById({ id: test.id })}>
          <Button variant="primary" className="w-full">
            Перейти к тесту
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default TestsListItem
