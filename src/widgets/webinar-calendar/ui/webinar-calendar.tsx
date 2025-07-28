'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Calendar, Messages, momentLocalizer, Event } from 'react-big-calendar'
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
      name: 'Вебинар по Математике: ЛогарифмыЛога ифмыЛогарифм огарифмыЛогарифмыЛогариф мыЛогарифмыЛогари фмыЛогарифмы',
      start: '2025-07-01T06:00:00Z', // 9:00 МСК
      end: '2025-07-01T07:30:00Z', // 10:30 МСК
      seats: 25,
    },
    {
      id: 2,
      name: 'Вебинар по Русскому языку: Сочинение',
      start: '2025-07-03T08:00:00Z', // 11:00 МСК
      end: '2025-07-03T09:30:00Z', // 12:30 МСК
      seats: 30,
    },
    {
      id: 3,
      name: 'Вебинар по Физике: Законы Ньютона',
      start: '2025-07-08T12:00:00Z', // 15:00 МСК
      end: '2025-07-08T13:30:00Z', // 16:30 МСК (можно ограничить до 16:00, если требуется)
      seats: 15,
    },
    {
      id: 4,
      name: 'Вебинар по Истории: Древняя Русь',
      start: '2025-07-10T06:00:00Z', // 9:00 МСК
      end: '2025-07-10T07:30:00Z',
      seats: 40,
    },
    {
      id: 5,
      name: 'Вебинар по Математике: Тригонометрия',
      start: '2025-07-15T09:00:00Z', // 12:00 МСК
      end: '2025-07-15T10:30:00Z',
      seats: 20,
    },
    {
      id: 6,
      name: 'Вебинар по Информатике: Алгоритмы',
      start: '2025-07-17T07:00:00Z', // 10:00 МСК
      end: '2025-07-17T08:30:00Z',
      seats: 25,
    },
    {
      id: 7,
      name: 'Вебинар по Русскому языку: Пунктуация',
      start: '2025-07-22T06:00:00Z', // 9:00 МСК
      end: '2025-07-22T07:30:00Z',
      seats: 35,
    },
    {
      id: 8,
      name: 'Вебинар по Физике: Электродинамика',
      start: '2025-07-24T10:00:00Z', // 13:00 МСК
      end: '2025-07-24T11:30:00Z',
      seats: 18,
    },
    {
      id: 9,
      name: 'Вебинар по Математике: Стереометрия',
      start: '2025-07-29T06:00:00Z', // 9:00 МСК
      end: '2025-07-29T07:30:00Z',
      seats: 22,
    },
    {
      id: 10,
      name: 'Вебинар по Обществознанию: Политика',
      start: '2025-07-31T08:00:00Z', // 11:00 МСК
      end: '2025-07-31T09:30:00Z',
      seats: 50,
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
    alert(event.title)
  }, [])

  return (
    <section className="mt-12 md:px-5">
      <div className="h-[800px] overflow-auto px-4 py-10 text-xs md:px-8">
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
          views={['month']}
        />
      </div>
    </section>
  )
}

export { WebinarCalendar }
