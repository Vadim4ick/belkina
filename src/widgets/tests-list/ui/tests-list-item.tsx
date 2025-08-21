'use client'

import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import { GetAllUserTestsQuery, TestResult_Status_All } from '@/shared/graphql/__generated__'
import { getRouteTestById } from '@/shared/lib/routes'
import { MAPPING_TEST_HISTORY_MODE, TEST_STATUS_COLOR } from '@/shared/const'
import { useProfileStore } from '@/entities/user/use-profile-store'
import { BookOpenIcon } from 'lucide-react' // пример иконки

interface TestsListItemProps {
  test: GetAllUserTestsQuery['GetUserTests']['docs'][0]
  className?: string
}

const TestsListItem = ({ test, className }: TestsListItemProps) => {
  const { profile } = useProfileStore()

  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className,
      )}
    >
      {/* Верхний блок с иконкой */}
      <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-r from-indigo-50 via-white to-white px-6 py-4">
        <div className="flex size-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
          <BookOpenIcon className="size-5" />
        </div>
        <div className="flex-1">
          <Typography tag="h3" variant="poppins-md-16" className="text-[#111827]">
            {test.title}
          </Typography>
        </div>
      </div>

      {/* Тело карточки */}
      <div className="flex flex-1 flex-col px-6 py-4">
        <Typography tag="p" variant="poppins-reg-14" className="line-clamp-4 flex-1 text-[#6B7280]">
          {test.description}
        </Typography>
      </div>

      {/* Нижний фиксированный футер */}
      <div className="flex items-center justify-between gap-4 px-6 pb-6">
        {!!profile?.id && (
          <span
            className={cn(
              'rounded-full px-3 py-1 text-xs font-semibold shadow-sm',
              TEST_STATUS_COLOR[test.status as TestResult_Status_All],
            )}
          >
            {MAPPING_TEST_HISTORY_MODE[test.status as TestResult_Status_All]}
          </span>
        )}

        <Link href={getRouteTestById({ id: test.id })} className="flex-1">
          <Button
            variant="primary"
            className="w-full rounded-xl py-3 font-semibold shadow-md transition group-hover:shadow-lg"
          >
            Перейти к тесту
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default TestsListItem
