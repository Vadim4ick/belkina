'use client'

import { useGetAllUserTests } from '@/shared/services/test.service'
import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'
import { memo } from 'react'
import { MAPPING_TEST_CATEGORY } from '../model/const'
import { GetAllExamsQuery, GetAllSubjectsQuery } from '@/shared/graphql/__generated__'
import { useTestsStore } from '@/entities/test/model/use-tests-store'
import { FilterTests } from '@/widgets/filter-category'
import { Container } from '@/shared/ui/container'

const TestsPage = memo(
  ({
    exams,
    subjects,
  }: {
    exams?: GetAllExamsQuery['Exams']['docs']
    subjects?: GetAllSubjectsQuery['Subjects']['docs']
  }) => {
    const { filters } = useTestsStore()

    const {
      data: res,
      isLoading,
      isFetching,
    } = useGetAllUserTests({
      status: MAPPING_TEST_CATEGORY[filters.categoryIdx],
      examId: filters.examId && filters.examId !== 1000 ? filters.examId : undefined,
      subjectId: filters.subjectId && filters.subjectId !== 1000 ? filters.subjectId : undefined,
    })

    return (
      <section className="max-mobile:py-6 py-12">
        <Container>
          <div className="flex items-center justify-between gap-2">
            <Typography tag="h1" variant="visuelt-bold-48">
              Тесты
            </Typography>

            {/* To Do По Аналогии с курсами привести верстку и  */}
            <FilterTests exams={exams} subjects={subjects} />
          </div>

          <TestsList tests={res?.GetUserTests.docs || []} isLoading={isLoading || isFetching} />
        </Container>
      </section>
    )
  },
)

export { TestsPage }
