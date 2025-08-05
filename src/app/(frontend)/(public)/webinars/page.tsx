import { getWebinars } from '@/shared/actions/webinars.action'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import { WebinarCalendar } from '@/widgets/webinar-calendar'

export const revalidate = 0

async function Page() {
  const webinars = await getWebinars()

  return (
    <section className="mt-12">
      <Container className="flex flex-col gap-6">
        <Typography tag="h2" variant="visuelt-bold-48">
          Вебинары
        </Typography>
      </Container>

      <WebinarCalendar webinars={webinars.Webinars.docs} />
    </section>
  )
}

export default Page
