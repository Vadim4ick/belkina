import { getHomePage } from '@/shared/actions/home.action'
import { Home } from '@/views/home'
import { Metadata } from 'next'

export const revalidate = 0

export default async function HomePage() {
  return <Home />
}

export const metadata: Metadata = {
  title: 'Подготовка к ЕГЭ по русскому языку | BELKINA.ONLINE | Главная',
  description:
    'Эффективно готовьтесь к ЕГЭ по русскому с персональной программой на платформе BELKINA.ONLINE',
}
