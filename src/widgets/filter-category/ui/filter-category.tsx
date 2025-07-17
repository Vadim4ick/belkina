import { useCoursesStore } from '@/entities/courses/use-сourses-store'
import { TabCategory } from '@/features/tab-categories'
import { GetAllExamsQuery, GetAllSubjectsQuery } from '@/shared/graphql/__generated__'
import { Button } from '@/shared/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/dialog'
import { useState } from 'react'

const FilterCategory = ({
  exams,
  subjects,
  isLoading,
}: {
  exams?: GetAllExamsQuery['Exams']['docs']
  subjects?: GetAllSubjectsQuery['Subjects']['docs']
  isLoading?: boolean
}) => {
  const [open, setOpen] = useState(false)

  const { filters, setFilter } = useCoursesStore()

  const selectedCount = (filters.exams !== 1000 ? 1 : 0) + (filters.subjects !== 1000 ? 1 : 0)

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

          <TabCategory
            btns={[{ id: 1000, title: 'Все' }, ...(exams?.map((el) => el) || [])]}
            value={filters.exams}
            isLoading={isLoading}
            onChange={(val) => setFilter('exams', val)}
          />

          <div className="flex items-center justify-between gap-4">
            <TabCategory
              btns={[{ id: 1000, title: 'Все' }, ...(subjects?.map((el) => el) || [])]}
              variant="secondary"
              value={filters.subjects}
              isLoading={isLoading}
              onChange={(val) => setFilter('subjects', val)}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { FilterCategory }
