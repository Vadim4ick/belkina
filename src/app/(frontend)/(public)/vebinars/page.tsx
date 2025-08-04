import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import { WebinarCalendar } from '@/widgets/webinar-calendar'

function page() {
  return (
    <section className="mt-12">
      <Container className="flex flex-col gap-6">
        <Typography tag="h2" variant="visuelt-bold-48">
          Вебинары
        </Typography>
      </Container>
      <WebinarCalendar />
    </section>
  )
}

export default page
