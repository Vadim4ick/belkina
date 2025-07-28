import { getExams, getSubjects } from '@/shared/actions/category.action'
import { getSettledValue } from '@/shared/lib/utils'
import { TestsPage } from '@/views/tests'

export const revalidate = 180

export default async function Page() {
  const [exams, subjects] = await Promise.allSettled([getExams(), getSubjects()])

  const examsVal = getSettledValue(exams)
  const subjectsVal = getSettledValue(subjects)

  return <TestsPage exams={examsVal?.Exams.docs} subjects={subjectsVal!.Subjects.docs} />
}
