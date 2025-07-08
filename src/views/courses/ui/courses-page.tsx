import { TariffList } from '@/features/tariff-list'
import { gql } from '@/shared/graphql/client'
import { CoursesList } from './courses-list'
import { getSettledValue } from '@/shared/lib/utils'

const CoursesPage = async () => {
  const [exams, subjects, tarrifs] = await Promise.allSettled([
    gql.GetAllExams(),
    gql.GetAllSubjects(),
    gql.GetTaraffis(),
  ])

  const examsVal = getSettledValue(exams)
  const subjectsVal = getSettledValue(subjects)
  const tarrifsVal = getSettledValue(tarrifs)

  return (
    <>
      <CoursesList exams={examsVal?.Exams.docs} subjects={subjectsVal?.Subjects.docs} />

      <TariffList tarrifs={tarrifsVal?.Tariffs.docs} />
    </>
  )
}

export { CoursesPage }
