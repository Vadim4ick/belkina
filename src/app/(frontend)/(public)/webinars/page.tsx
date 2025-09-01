import { getWebinars } from '@/shared/actions/webinars.action'
import { Container } from '@/shared/ui/container'
import { WebinarsPage } from '@/views/webinars'
import type { Metadata } from 'next'

export const revalidate = 180

async function Page() {
  const webinars = await getWebinars()

  return (
    <Container>
      <WebinarsPage webinars={webinars.Webinars.docs} />
    </Container>
  )
}

export default Page

export const metadata: Metadata = {
  title: 'Расписание вебинаров | BELKINA.ONLINE',
  description:
    'Расписание бесплатных вебинаров по подготовке к ЕГЭ по русскому языку на платформе BELKINA.ONLINE',
  keywords: 'Вебинар ЕГЭ, Вебинар ОГЭ',
}
