import { CoursesList } from './courses-list'
import { getSettledValue } from '@/shared/lib/utils'
import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'

const CoursesPage = async () => {
  const gql = await getServerAuthGqlClient({})

  const [exams, subjects] = await Promise.allSettled([gql.GetAllExams(), gql.GetAllSubjects()])

  const examsVal = getSettledValue(exams)
  const subjectsVal = getSettledValue(subjects)

  return <CoursesList exams={examsVal?.Exams.docs} subjects={subjectsVal?.Subjects.docs} />
}

export { CoursesPage }
