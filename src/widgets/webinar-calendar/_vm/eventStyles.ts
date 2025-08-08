import type { Event as RBCEvent } from 'react-big-calendar'
import type { GetAllWebinarsQuery } from '@/shared/graphql/__generated__'

// Тип события с расширением, если нужно
interface CalendarEvent extends RBCEvent {
  resource: GetAllWebinarsQuery['Webinars']['docs'][number]
}

export const eventTypeColors: Record<string, string> = {
  individual: '#a3d9ff',
  exam_practice: '#ffb3a3',
  free: '#a3ffa3',
  minigroup: '#ffcc99',
  // Можно добавить остальные типы и цвета
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
