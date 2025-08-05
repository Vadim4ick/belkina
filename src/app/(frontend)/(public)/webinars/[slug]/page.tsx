import { getWebinarsBySlug } from '@/shared/actions/webinars.action'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import { notFound } from 'next/navigation'

export const revalidate = 0

async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params

  const res = await getWebinarsBySlug({ slug })

  const post = res.Webinars.docs?.[0]

  if (!post) {
    return notFound()
  }

  return (
    <section className="mt-12">
      <Container className="flex flex-col gap-6">
        <Typography tag="h2" variant="visuelt-bold-48">
          Вебинар {slug}
        </Typography>
      </Container>
    </section>
  )
}

export default Page
