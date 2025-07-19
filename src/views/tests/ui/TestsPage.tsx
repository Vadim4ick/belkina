'use client'

import { useGetAllUserTests } from '@/shared/services/test.service'
import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'
import { memo } from 'react'
import { MAPPING_TEST_CATEGORY } from '../model/const'
import {
  GetAllExamsQuery,
  GetAllSubjectsQuery,
  GetPurchasesCoursesVideosQuery,
} from '@/shared/graphql/__generated__'
import { useTestsStore } from '@/entities/test/model/use-tests-store'
import { FilterTests } from '@/widgets/filter-category'

const TestsPage = memo(
  ({
    exams,
    subjects,
    purchases,
  }: {
    exams?: GetAllExamsQuery['Exams']['docs']
    subjects?: GetAllSubjectsQuery['Subjects']['docs']
    purchases?: GetPurchasesCoursesVideosQuery['Purchases']['docs']
  }) => {
    const { filters } = useTestsStore()

    const testIds = purchases
      ?.flatMap((p) => p.course.kinescopeVideos)
      // 2) оставляем только те видео, у которых есть непустое поле test
      .filter((v) => v.test != null)
      // 3) забираем только сами test‑id
      .map((v) => v.test?.id)

    // Если нужны уникальные ID:
    const uniqueTestIds = Array.from(new Set(testIds))

    const { data: res, isLoading } = useGetAllUserTests({
      status: MAPPING_TEST_CATEGORY[filters.categoryIdx],
      testIds: uniqueTestIds,
      examId: filters.examId && filters.examId !== 1000 ? filters.examId : undefined,
      subjectId: filters.subjectId && filters.subjectId !== 1000 ? filters.subjectId : undefined,
    })

    return (
      <section className="max-mobile:py-6 py-12">
        <div>
          <div className="flex items-center justify-between gap-2">
            <Typography tag="h1" variant="visuelt-bold-48">
              Тесты
            </Typography>

            <FilterTests exams={exams} subjects={subjects} />
          </div>
        </div>

        <TestsList tests={res?.GetUserTests.docs || []} isLoading={isLoading} />
      </section>
    )
  },
)

export { TestsPage }
