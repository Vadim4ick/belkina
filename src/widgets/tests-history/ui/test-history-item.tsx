import { GetTestResHistoryQuery } from '@/shared/graphql/__generated__'
import { Badge } from '@/shared/ui/badge'
import { Typography } from '@/shared/ui/typography'
import { MAPPING_TEST_HISTORY_MODE } from '../model/const'
import Link from 'next/link'
import { getRouteTestById } from '@/shared/lib/routes'

const TestHistoryItem = ({ test }: { test: GetTestResHistoryQuery['TestResults']['docs'][0] }) => {
  return (
    <Link
      href={getRouteTestById({ id: test.test.id })}
      className="grid items-center gap-3 rounded-[6px] bg-white px-2.5 py-3 lg:grid-cols-8 lg:grid-rows-1"
    >
      <div className="lg:col-span-4">
        <Typography tag="p" variant="poppins-reg-14" className="text-[#6B7280]">
          {test.test.title}
        </Typography>
      </div>

      <div className="justify-self-end lg:col-span-2 lg:col-start-7">
        <Badge variant={test.status == 'completed' ? 'success' : 'destructive'} className="px-2.5">
          <Typography tag="p" variant="poppins-reg-14">
            {MAPPING_TEST_HISTORY_MODE[test.status]}
          </Typography>
        </Badge>
      </div>
    </Link>
  )
}

export default TestHistoryItem
