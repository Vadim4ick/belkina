import { CoursesList } from './courses-list'
import { getSettledValue } from '@/shared/lib/utils'
import { getExams, getSubjects } from '@/shared/actions/category.action'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'

const CoursesPage = async () => {
  const [exams, subjects] = await Promise.allSettled([getExams(), getSubjects()])

  const examsVal = getSettledValue(exams)
  const subjectsVal = getSettledValue(subjects)

  return (
    <>
      <section className="pt-6">
        <Container className="flex flex-col gap-6">
          <Typography tag="h1" variant="visuelt-bold-48">
            Курсы
          </Typography>
        </Container>

        <CoursesList exams={examsVal?.Exams.docs} subjects={subjectsVal?.Subjects.docs} />
      </section>
    </>
  )
}

export { CoursesPage }
