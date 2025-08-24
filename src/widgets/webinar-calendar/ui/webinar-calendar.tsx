'use client'

import { useCallback, useMemo, useState } from 'react'
import { Calendar, Messages, momentLocalizer } from 'react-big-calendar'
import { Event as RBCEvent, Views } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/ru'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar-castom-styles.css'
import { useRouter } from 'next/navigation'
import type { GetAllWebinarsQuery } from '@/shared/graphql/__generated__'
import { getRouteWebinarsBySlug } from '@/shared/lib/routes'
import { CALENDAR_MESSAGES_RU } from './locales-ru'
import { CalendarNav } from './calendar-nav'
import { Button } from '@/shared/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Badge } from '@/shared/ui/badge'
import { getEventStyle } from '../model/utils'

moment.locale('ru')
const localizer = momentLocalizer(moment)

type Webinar = GetAllWebinarsQuery['Webinars']['docs'][number]

interface CalendarEvent extends RBCEvent {
  slug: string
  resource: Webinar
}

type Keys = keyof typeof Views

export const WebinarCalendar = ({
  webinars,
}: {
  webinars: GetAllWebinarsQuery['Webinars']['docs']
}) => {
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.MONTH)
  const [date, setDate] = useState<Date>(moment().toDate())

  const router = useRouter()

  // Преобразуем документы в события календаря
  const events = useMemo<CalendarEvent[]>(() => {
    return webinars.map((webinar) => ({
      title: webinar.title,
      slug: webinar.slug,
      start: new Date(webinar.startsAt),
      end: new Date(webinar.endAt),
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

  // Перевод сообщений календаря на русский
  const messages = useMemo<Partial<Messages>>(() => {
    return CALENDAR_MESSAGES_RU
  }, [])

  // *** НОВОЕ: Обработчик клика на кнопку "Предыдущий" ***
  const onPrevClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).subtract(1, 'd').toDate())
    } else if (view === Views.WEEK) {
      setDate(moment(date).subtract(1, 'w').toDate())
    } else if (view === Views.AGENDA) {
      setDate(moment(date).subtract(1, 'M').startOf('month').toDate())
    } else {
      setDate(moment(date).subtract(1, 'M').startOf('month').toDate())
    }
  }, [view, date])

  // *** НОВОЕ: Обработчик клика на кнопку "Следующий" ***
  const onNextClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).add(1, 'd').toDate())
    } else if (view === Views.WEEK) {
      setDate(moment(date).add(1, 'w').toDate())
    } else if (view === Views.AGENDA) {
      setDate(moment(date).add(1, 'M').startOf('month').toDate())
    } else {
      setDate(moment(date).add(1, 'M').startOf('month').toDate())
    }
  }, [view, date])

  // *** НОВОЕ: Форматируем текст даты в зависимости от текущего вида ***
  const dateText = useMemo(() => {
    if (view === Views.DAY) {
      return moment(date).format('D MMMM YYYY')
    } else if (view === Views.WEEK) {
      return `${moment(date).startOf('week').format('D MMMM')} - ${moment(date).endOf('week').format('D MMMM YYYY')}`
    } else if (view === Views.AGENDA) {
      return `${moment(date).startOf('month').format('D MMMM')} - ${moment(date).endOf('month').format('D MMMM YYYY')}`
    } else {
      return moment(date).format('MMMM YYYY')
    }
  }, [view, date])

  return (
    <div className="space-y-5 p-1">
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        <div className="flex w-full space-x-2">
          <Button variant="outline" size="icon" onClick={onPrevClick} className="btn btn-secondary">
            <ArrowLeft />
          </Button>
          <Badge variant="secondary" className="grow text-sm md:text-lg">
            {dateText}
          </Badge>

          <Button variant="outline" size="icon" onClick={onNextClick} className="btn btn-secondary">
            <ArrowRight />
          </Button>
        </div>
        <CalendarNav view={view} onViewChange={setView} />
      </div>

      <div className="h-[400px] md:h-[800px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          messages={messages}
          popup
          culture="ru"
          defaultView="month"
          view={view}
          toolbar={false}
          date={date}
          onNavigate={setDate}
          eventPropGetter={getEventStyle}
        />
      </div>
    </div>
  )
}
