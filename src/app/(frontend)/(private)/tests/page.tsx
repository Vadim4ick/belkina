import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'
import { getSettledValue } from '@/shared/lib/utils'
import { TestsPage } from '@/views/tests'

export const revalidate = 180

export default async function Page() {
  const gql = await getServerAuthGqlClient({})

  const [exams, subjects, purchases] = await Promise.allSettled([
    gql.GetAllExams(),
    gql.GetAllSubjects(),
    gql.GetPurchasesCoursesVideos({
      userId: 29,
    }),
  ])

  const examsVal = getSettledValue(exams)
  const subjectsVal = getSettledValue(subjects)
  const purchasesVal = getSettledValue(purchases)

  return (
    <TestsPage
      exams={examsVal?.Exams.docs}
      subjects={subjectsVal!.Subjects.docs}
      purchases={purchasesVal?.Purchases.docs}
    />
  )
}
