import { useTestsStore } from '@/entities/test/model/use-tests-store'
import { useProfileStore } from '@/entities/user/use-profile-store'
import { TabCategory } from '@/features/tab-categories'
import { GetAllExamsQuery, GetAllSubjectsQuery } from '@/shared/graphql/__generated__'
import { Button } from '@/shared/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/dialog'
import { btnsCategoryTests } from '@/views/tests/model/const'
import { useState } from 'react'

const FilterTests = ({
  exams,
  subjects,
}: {
  exams?: GetAllExamsQuery['Exams']['docs']
  subjects?: GetAllSubjectsQuery['Subjects']['docs']
}) => {
  const [open, setOpen] = useState(false)
  const { profile } = useProfileStore()

  const { filters, setFilter, setCategoryIdx } = useTestsStore()

  const selectedCount =
    (filters.examId !== 1000 ? 1 : 0) +
    (filters.categoryIdx !== 0 ? 1 : 0) +
    (filters.subjectId !== 1000 ? 1 : 0)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          onClick={() => setOpen(true)}
          className="relative flex items-center gap-2 rounded px-3 py-1"
        >
          <span>Фильтры</span>

          {selectedCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              {selectedCount}
            </span>
          )}
        </Button>
      </DialogTrigger>

      <DialogContent aria-describedby="" className="max-w-[650px!important]">
        <div className="max-mobile:px-4 flex flex-col gap-6 overflow-auto rounded-[6px] bg-white p-6">
          <DialogHeader>
            <DialogTitle>Фильтры</DialogTitle>
          </DialogHeader>

          {!!profile?.id && (
            <TabCategory
              btns={btnsCategoryTests}
              value={filters.categoryIdx}
              onChange={(val) => setCategoryIdx(val)}
            />
          )}

          <div className="flex flex-col gap-4">
            <TabCategory
              btns={[{ id: 1000, title: 'Все' }, ...(exams?.map((el) => el) || [])]}
              value={filters.examId}
              onChange={(val) => setFilter('examId', val)}
              variant="secondary"
            />
            <TabCategory
              btns={[{ id: 1000, title: 'Все' }, ...(subjects?.map((el) => el) || [])]}
              value={filters.subjectId}
              onChange={(val) => setFilter('subjectId', val)}
              variant="secondary"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { FilterTests }
