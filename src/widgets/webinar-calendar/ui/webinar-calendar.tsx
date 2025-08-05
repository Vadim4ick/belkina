'use client'

import { useCallback, useMemo } from 'react'
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

export const WebinarCalendar = ({
  webinars,
}: {
  webinars: GetAllWebinarsQuery['Webinars']['docs']
}) => {
  const router = useRouter()

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
        // Ограничиваем рабочее окно (9 — 16)
        min={moment().hour(9).minute(0).toDate()}
        max={moment().hour(16).minute(0).toDate()}
        // Отключаем лишние виды, если нужны только месяц/день — допиши
        views={['month', 'week', 'day', 'agenda']}
        // Красим сегодняшнюю дату (пример)
        // dayPropGetter={(date) =>
        //   moment(date).isSame(new Date(), 'day')
        //     ? { className: 'bg-violet-50' }
        //     : undefined
        // }
        // Убираем лишние inline-style, чтобы не мешали Tailwindʼу
        style={{ height: '100%' }}
      />
    </div>
  )
}
