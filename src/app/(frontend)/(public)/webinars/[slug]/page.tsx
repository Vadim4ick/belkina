import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'
import { getWebinarsBySlug } from '@/shared/actions/webinars.action'
import { WebinarsBySlugPage } from '@/views/webinars-by-slug-page'
import { notFound } from 'next/navigation'

export const revalidate = 180

async function Page({
  params: paramsPromise,
}: {
  params: Promise<{
    slug?: string
  }>
}) {
  const gql = await getServerAuthGqlClient({})

  const { slug = '' } = await paramsPromise

  const res = await getWebinarsBySlug({ slug })

  const webinar = res.Webinars.docs?.[0]

  if (!webinar) {
    return notFound()
  }

  const count = await gql.WebinarSuccessCount({ id: webinar.id })

  return <WebinarsBySlugPage webinar={webinar} count={count.WebinarPayments.totalDocs} />
}

export default Page
