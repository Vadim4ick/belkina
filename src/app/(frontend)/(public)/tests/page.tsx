import { getExams, getSubjects } from '@/shared/actions/category.action'
import { getSettledValue } from '@/shared/lib/utils'
import { TestsPage } from '@/views/tests'
import { Metadata } from 'next'

export const revalidate = 180

export default async function Page() {
  const [exams, subjects] = await Promise.allSettled([getExams(), getSubjects()])

  const examsVal = getSettledValue(exams)
  const subjectsVal = getSettledValue(subjects)

  // Добавляем проверку на null/undefined
  if (!examsVal?.Exams?.docs || !subjectsVal?.Subjects?.docs) {
    return null
  }

  return <TestsPage exams={examsVal?.Exams.docs} subjects={subjectsVal!.Subjects.docs} />
}

export const metadata: Metadata = {
  title: 'Подготовка к ЕГЭ по русскому языку | BELKINA.ONLINE | Тесты',
  description:
    'Эффективно готовьтесь к ЕГЭ по русскому с персональной программой на платформе BELKINA.ONLINE',
  keywords: 'Тесты ОГЭ ЕГЭ',
}
