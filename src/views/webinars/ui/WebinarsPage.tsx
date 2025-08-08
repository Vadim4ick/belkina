import { GetAllWebinarsQuery } from '@/shared/graphql/__generated__'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import { WebinarCalendar } from '@/widgets/webinar-calendar'

const WebinarsPage = ({ webinars }: { webinars: GetAllWebinarsQuery['Webinars']['docs'] }) => {
  return (
    <section className="my-12">
      <Container className="flex flex-col gap-6">
        <Typography tag="h2" variant="visuelt-bold-48">
          Вебинары
        </Typography>

        <WebinarCalendar webinars={webinars} />
      </Container>
    </section>
  )
}

export { WebinarsPage }
