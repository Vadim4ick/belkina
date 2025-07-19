import { CoursesList } from './courses-list'
import { getSettledValue } from '@/shared/lib/utils'
import { getExams, getSubjects } from '@/shared/actions/category.action'

const CoursesPage = async () => {
  const [exams, subjects] = await Promise.allSettled([getExams(), getSubjects()])

  const examsVal = getSettledValue(exams)
  const subjectsVal = getSettledValue(subjects)

  return <CoursesList exams={examsVal?.Exams.docs} subjects={subjectsVal?.Subjects.docs} />
}

export { CoursesPage }
