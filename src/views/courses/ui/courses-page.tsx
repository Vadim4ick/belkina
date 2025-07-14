import { TariffList } from '@/features/tariff-list'
import { CoursesList } from './courses-list'
import { getSettledValue } from '@/shared/lib/utils'
import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'

const CoursesPage = async () => {
  const gql = await getServerAuthGqlClient({})

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
