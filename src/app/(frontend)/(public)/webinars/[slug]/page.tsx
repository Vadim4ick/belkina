import { getWebinarsBySlug } from '@/shared/actions/webinars.action'
import { WebinarsBySlugPage } from '@/views/webinars-by-slug-page'
import { notFound } from 'next/navigation'

export const revalidate = 0

async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params

  const res = await getWebinarsBySlug({ slug })

  const webinar = res.Webinars.docs?.[0]

  if (!webinar) {
    return notFound()
  }

  return <WebinarsBySlugPage webinar={webinar} />
}

export default Page
