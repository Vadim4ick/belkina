import { getWebinars } from '@/shared/actions/webinars.action'
import { Container } from '@/shared/ui/container'
import { WebinarsPage } from '@/views/webinars'

export const revalidate = 0

async function Page() {
  const webinars = await getWebinars()

  return (
    <Container>
      <WebinarsPage webinars={webinars.Webinars.docs} />
    </Container>
  )
}

export default Page
