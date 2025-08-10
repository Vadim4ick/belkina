import type { Event as RBCEvent } from 'react-big-calendar'
import type { GetAllWebinarsQuery } from '@/shared/graphql/__generated__'
import { eventTypeColors } from '../model/const'

// Тип события с расширением, если нужно
interface CalendarEvent extends RBCEvent {
  resource: GetAllWebinarsQuery['Webinars']['docs'][number]
}

/**
 * Функция для передачи style пропса eventPropGetter
 */
export function getEventStyle(event: CalendarEvent) {
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
