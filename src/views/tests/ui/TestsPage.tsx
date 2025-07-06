'use client'

import { TabCategory } from '@/features/tab-categories'
import { useGetAllUserTests } from '@/shared/services/test.service'
import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'
import { memo } from 'react'
import { btnsCategoryTests, MAPPING_TEST_CATEGORY } from '../model/const'
import { GetAllExamsQuery, GetAllSubjectsQuery } from '@/shared/graphql/__generated__'
import { useTestsStore } from '@/entities/test/model/use-tests-store'

const TestsPage = memo(
  ({
    exams,
    subjects,
  }: {
    exams?: GetAllExamsQuery['Exams']['docs']
    subjects?: GetAllSubjectsQuery['Subjects']['docs']
  }) => {
    const { filters, setFilter, setCategoryIdx } = useTestsStore()

    const { data: res, isLoading } = useGetAllUserTests({
      status: MAPPING_TEST_CATEGORY[filters.categoryIdx],
      examId: filters.examId && filters.examId !== 1000 ? filters.examId : undefined,
      subjectId: filters.subjectId && filters.subjectId !== 1000 ? filters.subjectId : undefined,
    })

    return (
      <section className="max-mobile:py-6 py-12">
        <div>
          <div className="max-tablet:flex-col max-tablet:items-start mb-6 flex items-center justify-between gap-2">
            <Typography tag="h1" variant="visuelt-bold-48">
              Тесты
            </Typography>

            <TabCategory
              btns={btnsCategoryTests}
              value={filters.categoryIdx}
              onChange={(val) => setCategoryIdx(val)}
            />
          </div>

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

        <TestsList tests={res?.GetUserTests.docs || []} isLoading={isLoading} />
      </section>
    )
  },
)

export { TestsPage }
