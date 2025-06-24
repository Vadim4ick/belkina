import { Badge } from '@/shared/ui/badge'
import { Typography } from '@/shared/ui/typography'
import { TestsListItem } from '@/widgets/tests-history/ui/tests-history'

const TestItem = ({ test }: { test: TestsListItem }) => {
  return (
    <>
      <div className="grid gap-3 rounded-[6px] bg-white px-2.5 py-3 lg:grid-cols-8 lg:grid-rows-1">
        <div className="lg:col-span-4">
          <Typography tag="p" variant="poppins-reg-14" className="text-[#6B7280]">
            {test.name}
          </Typography>
        </div>
        <div className="lg:col-span-2 lg:col-start-5">
          <Typography tag="p" variant="poppins-reg-14" className="text-[#6B7280]">
            {test.date}
          </Typography>
        </div>
        <div className="justify-self-end lg:col-span-2 lg:col-start-7">
          <Badge variant="success" className="px-2.5">
            <Typography tag="p" variant="poppins-reg-14">
              {test.status}
            </Typography>
          </Badge>
        </div>
      </div>
    </>
  )
}

export default TestItem
