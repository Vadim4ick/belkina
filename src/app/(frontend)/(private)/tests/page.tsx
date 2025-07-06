import { getServerGqlClient } from '@/shared/graphql/client'
import { getSettledValue } from '@/shared/lib/utils'
import { TestsPage } from '@/views/tests'

export const revalidate = 180

export default async function Page() {
  const gql = await getServerGqlClient()

  const [exams, subjects] = await Promise.allSettled([gql.GetAllExams(), gql.GetAllSubjects()])

  const examsVal = getSettledValue(exams)
  const subjectsVal = getSettledValue(subjects)

  return <TestsPage exams={examsVal?.Exams.docs} subjects={subjectsVal!.Subjects.docs} />
}
