'use client'

import { useCallback, useMemo, useState } from 'react'
import { Calendar, Messages, momentLocalizer } from 'react-big-calendar'
import type { Event as RBCEvent } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/ru'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar-castom-styles.css'
import { useRouter } from 'next/navigation'
import type { GetAllWebinarsQuery } from '@/shared/graphql/__generated__'
import { getRouteWebinarsBySlug } from '@/shared/lib/routes'

moment.locale('ru')

const localizer = momentLocalizer(moment)

type Webinar = GetAllWebinarsQuery['Webinars']['docs'][number]

interface CalendarEvent extends RBCEvent {
  slug: string
  resource: Webinar
}

const messages: Partial<Messages> = {
  allDay: 'Весь день',
  previous: 'Назад',
  next: 'Вперёд',
  today: 'Сегодня',
  month: 'Месяц',
  week: 'Неделя',
  day: 'День',
  agenda: 'Расписание',
  date: 'Дата',
  time: 'Время',
  event: 'Событие',
  noEventsInRange: 'В этом диапазоне нет событий',
  showMore: (total) => `+ ещё ${total}`,
}

const eventTypeColors: Record<string, string> = {
  individual: '#a3d9ff',
  exam_practice: '#ffb3a3',
  free: '#a3ffa3',
  minigroup: '#ffcc99',
}

export const WebinarCalendar = ({
  webinars,
}: {
  webinars: GetAllWebinarsQuery['Webinars']['docs']
}) => {
  const [view, setView] = useState<'month' | 'week' | 'day' | 'agenda'>('month')
  const [currentDate, setCurrentDate] = useState(new Date())
  const router = useRouter()

  console.log('webinars ==> ', webinars)
  // Преобразуем документы в события календаря
  const events = useMemo<CalendarEvent[]>(() => {
    return webinars.map((webinar) => ({
      title: webinar.title,
      slug: webinar.slug,
      start: new Date(webinar.startsAt),
      end: new Date(webinar.startsAt),
      resource: webinar,
    }))
  }, [webinars])

  // Обработчик клика по событию
  const handleSelectEvent = useCallback(
    (event: CalendarEvent) => {
      router.push(getRouteWebinarsBySlug({ slug: event.slug }))
    },
    [router],
  )

  const eventPropGetter = (event: CalendarEvent) => {
    const backgroundColor = eventTypeColors[event.resource.type] || '#1455fe'
    return {
      style: {
        backgroundColor,
        color: '#1455fe',
        borderRadius: '4px',
        border: 'none',
      },
    }
  }

  return (
    <div className="h-full overflow-auto px-4 py-10 text-xs md:h-[800px] md:px-8">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        messages={messages}
        culture="ru"
        popup
        defaultView="month"
        views={['month', 'week', 'day', 'agenda']}
        view={view}
        onView={(nextView) => {
          if (['month', 'week', 'day', 'agenda'].includes(nextView)) {
            setView(nextView as 'month' | 'week' | 'day' | 'agenda')
          }
        }}
        date={currentDate}
        onNavigate={(newDate) => setCurrentDate(newDate)}
        eventPropGetter={eventPropGetter}
        style={{ height: '100%' }}
      />
    </div>
  )
}
