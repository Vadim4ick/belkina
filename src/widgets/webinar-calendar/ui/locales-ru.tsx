import { Messages } from 'react-big-calendar'

export const CALENDAR_MESSAGES_RU: Partial<Messages> = {
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
  showMore: (total: number): React.ReactNode => (
    <span className="font-light text-[#1455fe] hover:text-[#0034ba]">+ ещё {total}</span>
  ),
}