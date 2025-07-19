import { getExams, getSubjects } from '@/shared/actions/category.action'
import { getPurchasesCourses } from '@/shared/actions/purchases.action'
import { getSettledValue } from '@/shared/lib/utils'
import { JwtService } from '@/shared/services/jwt-service'
import { TestsPage } from '@/views/tests'
import { cookies } from 'next/headers'

export const revalidate = 180

export default async function Page() {
  const token = (await cookies()).get('accessToken')?.value

  const { id } = await JwtService.verifyToken(token)

  const [exams, subjects, purchases] = await Promise.allSettled([
    getExams(),
    getSubjects(),
    getPurchasesCourses(Number(id)),
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
