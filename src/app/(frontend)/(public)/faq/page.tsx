import { Container } from '@/shared/ui/container'

import { FaqPage } from '@/views/faqs'
import type { Metadata } from 'next/types'

export const revalidate = 180

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Блог Belkina.online',
    description: 'Часто задаваемые вопросы от Belkina.online.',
    keywords: 'Часто задаваемые ОГЭ ЕГЭ',
    alternates: {
      canonical: '/faq',
    },
    openGraph: {
      title: 'Блог Belkina.online',
      description: 'Часто задаваемые вопросы от Belkina.online.',
      url: '/faq',
    },
  }
}

async function Page() {
  return (
    <Container>
      <FaqPage />
    </Container>
  )
}

export default Page
