import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'

export const revalidate = 0

async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params

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
