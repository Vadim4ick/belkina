import { GetAllWebinarsQuery } from '@/shared/graphql/__generated__'
import { Typography } from '@/shared/ui/typography'
import { WebinarCalendar } from '@/widgets/webinar-calendar'

const WebinarsPage = ({ webinars }: { webinars: GetAllWebinarsQuery['Webinars']['docs'] }) => {
  return (
    <section className="mt-12">
      <Typography className="pb-6" tag="h2" variant="visuelt-bold-48">
        Вебинары
      </Typography>

      <WebinarCalendar webinars={webinars} />
    </section>
  )
}

export { WebinarsPage }
