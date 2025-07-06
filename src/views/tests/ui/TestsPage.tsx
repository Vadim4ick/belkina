'use client'

import { TabCategory } from '@/features/tab-categories'
import { useGetAllUserTests } from '@/shared/services/test.service'
import { Typography } from '@/shared/ui/typography'
import { TestsList } from '@/widgets/tests-list'
import { memo, useState } from 'react'
import { btnsCategoryTests, MAPPING_TEST_CATEGORY } from '../model/const'
import { GetAllExamsQuery, GetAllSubjectsQuery } from '@/shared/graphql/__generated__'

const TestsPage = memo(
  ({
    exams,
    subjects,
  }: {
    exams?: GetAllExamsQuery['Exams']['docs']
    subjects?: GetAllSubjectsQuery['Subjects']['docs']
  }) => {
    const [category, setCategory] = useState(0)
    const [examId, setExamId] = useState<number | undefined>(undefined)
    const [subjectId, setSubjectId] = useState<number | undefined>(undefined)

    const { data: res, isLoading } = useGetAllUserTests({
      status: MAPPING_TEST_CATEGORY[category],
      examId: examId,
      subjectId: subjectId,
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
              value={category}
              onChange={(_, val) => setCategory(val)}
              name="exams"
            />
          </div>

          <div className="flex flex-col gap-4">
            <TabCategory
              btns={exams?.map((el) => el)}
              value={examId}
              onChange={(_, val) => setExamId(val)}
              name="subjects"
            />
            <TabCategory
              btns={subjects?.map((el) => el)}
              value={subjectId}
              onChange={(_, val) => setSubjectId(val)}
              name="subjects"
            />
          </div>
        </div>

        <TestsList tests={res?.GetUserTests.docs || []} isLoading={isLoading} />
      </section>
    )
  },
)

export { TestsPage }
