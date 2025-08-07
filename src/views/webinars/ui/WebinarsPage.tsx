import { GetAllWebinarsQuery } from '@/shared/graphql/__generated__'
import { Typography } from '@/shared/ui/typography'
import { eventTypeColors, eventTypeNames, WebinarCalendar } from '@/widgets/webinar-calendar'

const WebinarsPage = ({ webinars }: { webinars: GetAllWebinarsQuery['Webinars']['docs'] }) => {
  return (
    <section className="mt-12">
      <Typography className="pb-6" tag="h2" variant="visuelt-bold-48">
        Вебинары
      </Typography>

      <div className="mb-6 flex flex-wrap gap-4">
        {Object.entries(eventTypeNames).map(([key, name]) => (
          <div key={key} className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: eventTypeColors[key as keyof typeof eventTypeColors] }}
            />
            <span className="text-muted-foreground text-sm">{name}</span>
          </div>
        ))}
      </div>

      <WebinarCalendar webinars={webinars} />
    </section>
  )
}

export { WebinarsPage }
