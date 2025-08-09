import { GetAllWebinarsQuery } from '@/shared/graphql/__generated__'
import { Typography } from '@/shared/ui/typography'
import { eventTypeColors, eventTypeNames, WebinarCalendar } from '@/widgets/webinar-calendar'
import { EventVariant } from '@/widgets/webinar-calendar/model/const'

const legend = (Object.keys(eventTypeColors) as EventVariant[]).map((key) => ({
  key,
  name: eventTypeNames[key],
  color: eventTypeColors[key],
}))

const WebinarsPage = ({ webinars }: { webinars: GetAllWebinarsQuery['Webinars']['docs'] }) => {
  return (
    <section className="flex flex-col gap-6 py-12">
      <div className="flex flex-col gap-6">
        <Typography tag="h2" variant="visuelt-bold-48">
          Вебинары
        </Typography>

        <div aria-label="Цветовая легенда типов вебинаров">
          <ul className="flex flex-wrap items-center gap-2 md:gap-3">
            {legend.map(({ key, name, color }) => (
              <li
                key={key}
                className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm"
              >
                <span
                  aria-hidden="true"
                  className="inline-block size-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <WebinarCalendar webinars={webinars} />
    </section>
  )
}

export { WebinarsPage }
