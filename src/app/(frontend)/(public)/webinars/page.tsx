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
  title: 'Вебинары по ОГЭ и ЕГЭ по русскому 2025 | Belkina.online',
  description:
    'Прими участие в бесплатных вебинарах по подготовке к ОГЭ и ЕГЭ по русскому языку в 2025 году. Практика, разбор заданий и личный план. Запишись на ближайшее занятие — начни сдать на 90+.',
  keywords:
    'вебинары по егэ по русскому, бесплатные вебинары по русскому, подготовка к огэ по русскому 2025, егэ по русскому 2025, разбор заданий егэ, онлайн подготовка к огэ, пробный егэ по русскому, практика по егэ по русскому, мини-группы по русскому, индивидуальные занятия по егэ, вебинары огэ 2025',
}
