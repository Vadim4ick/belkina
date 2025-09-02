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
  title: 'Бесплатный тест по ЕГЭ и ОГЭ по русскому 2025 | Belkina.online',
  description:
    'Пройди бесплатный тест по русскому языку и узнай свой уровень подготовки к ЕГЭ и ОГЭ 2025. Получи персональный план, разбор ошибок и рекомендации. Начни подготовку с уверенностью — уже сегодня.',
  keywords:
    'тест по егэ по русскому, бесплатный тест по русскому, пробный егэ по русскому, проверь уровень русский, подготовка к огэ по русскому 2025, егэ по русскому 2025, как сдать егэ на 90, разбор ошибок егэ, персональный план подготовки, онлайн тест по русскому, тест для 11 класса, тест для 9 класса, belkina online, подготовка к огэ 2025, пробное тестирование егэ, сдать огэ по русскому на 5',
}
