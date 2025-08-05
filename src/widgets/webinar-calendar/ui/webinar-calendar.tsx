'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Calendar, Messages, momentLocalizer, Event, EventProps } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/ru'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar-castom-styles.css'

// --- Инициализация локализации и локализатора ---
moment.locale('ru')
const localizer = momentLocalizer(moment)

interface Webinar {
  id: number
  name: string
  start: string // ISO дата в UTC
  end: string // ISO дата в UTC
  seats: number
}

interface CalendarEvent extends Event {
  resource: Webinar
}

/**
--- Русский интерфейс для календаря ---
 */
const trenslateToRussian: Messages = {
  allDay: 'Весь день',
  previous: 'Назад',
  next: 'Вперед',
  today: 'Сегодня',
  month: 'Месяц',
  week: 'Неделя',
  day: 'День',
  agenda: 'Расписание',
  date: 'Дата',
  time: 'Время',
  event: 'Событие',
  noEventsInRange: 'В этом диапазоне нет событий.',
  showMore: (total) => `+ ещё ${total}`,
}

/**
--- возращает мок-данные с ограничением времени 9:00 - 16:00 (МСК) ---
 * @returns id: number
 * @returns name: string
 * @returns start: string // ISO дата в UTC
 * @returns end: string // ISO дата в UTC
 * @returns seats: number
 */
const fetchWebinars = async (): Promise<Webinar[]> => {
  return [
    // Время в UTC соответствует 9:00 МСК + 0-7 часов на другие временные сдвиги до 16:00 МСК
    {
      id: 1,
      name: 'Вебинар по Математике: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
      start: '2025-08-04T06:00:00Z', // 9:00 МСК
      end: '2025-08-04T07:30:00Z', // 10:30 МСК
      seats: 25,
    },
    {
      id: 2,
      name: 'Вебинар по Русскому языку: Сочинение',
      start: '2025-08-03T08:00:00Z', // 11:00 МСК
      end: '2025-08-03T09:30:00Z', // 12:30 МСК
      seats: 30,
    },
  ]
}

// --- Основной компонент с календарём и модалкой регистрации ---
const WebinarCalendar = () => {
  const [rawWebinars, setRawWebinars] = useState<Webinar[]>([])
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const getWebinars = async () => {
      const webinarsData = await fetchWebinars()
      setRawWebinars(webinarsData)
    }
    getWebinars()
  }, [])

  // Маппим данные в формат для react-big-calendar с датами JS Date
  const events = useMemo<CalendarEvent[]>(() => {
    return rawWebinars.map((webinar) => ({
      title: webinar.name,
      start: new Date(webinar.start),
      end: new Date(webinar.end),
      resource: webinar,
    }))
  }, [rawWebinars])

  const handleSelectEvent = useCallback((event: CalendarEvent) => {
    setSelectedWebinar(event.resource)
    // alert(event.title)
  }, [])

  return (
    <div className="h-full overflow-auto px-4 py-10 text-xs md:h-[800px] md:px-8">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        messages={trenslateToRussian}
        culture="ru"
        popup
        // Ограничения по времени для отображения (опционально)
        min={new Date(0, 0, 0, 9, 0, 0)} // 9:00
        max={new Date(0, 0, 0, 16, 0, 0)} // 16:00
        views={['month', 'week', 'day']}
      />
    </div>
  )
}

export { WebinarCalendar }
