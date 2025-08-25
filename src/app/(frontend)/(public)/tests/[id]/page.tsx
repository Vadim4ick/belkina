import { TestByIdPage } from '@/views/test-by-id'

export const revalidate = 180

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return <TestByIdPage id={id} />
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return {
    title: `Тест ${id} | BELKINA.ONLINE | Тесты`,
    description: `Пройди тест ${id} и подготовься к ЕГЭ по русскому языку с BELKINA.ONLINE`,
  }
}
