import { getHomePage } from '@/shared/actions/home.action'
import { Home } from '@/views/home'
import { Metadata } from 'next'

export const revalidate = 0

export default async function HomePage() {
  return <Home />
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await getHomePage()
    const meta = res?.HomePage?.Meta || {}

    return {
      title: meta.seo_title || 'Подготовка к ЕГЭ по русскому языку | BELKINA.ONLINE | Главная',
      description:
        meta.seo_description ||
        'Эффективно готовьтесь к ЕГЭ по русскому с персональной программой на платформе BELKINA.ONLINE',
    }
  } catch (error) {
    console.error('Failed to generate metadata:', error)
    return {
      title: 'Подготовка к ЕГЭ по русскому языку | BELKINA.ONLINE | Главная',
      description:
        'Эффективно готовьтесь к ЕГЭ по русскому с персональной программой на платформе BELKINA.ONLINE',
    }
  }
}
