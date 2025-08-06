import { getWebinars } from '@/shared/actions/webinars.action'
import { WebinarsPage } from '@/views/webinars'

export const revalidate = 0

async function Page() {
  const webinars = await getWebinars()

  return <WebinarsPage webinars={webinars.Webinars.docs} />
}

export default Page
