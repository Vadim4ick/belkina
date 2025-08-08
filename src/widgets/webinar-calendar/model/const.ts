export type EventVariant = 'individual' | 'exam_practice' | 'free' | 'minigroup'

export const eventTypeColors: Record<EventVariant, string> = {
  individual: '#a3d9ff',
  exam_practice: '#ffb3a3',
  free: '#a3ffa3',
  minigroup: '#ffcc99',
}

export const eventTypeNames: Record<EventVariant, string> = {
  individual: 'Индивидуальныие занятия',
  exam_practice: 'Практика по экзаменам',
  free: 'Бесплатные занятия',
  minigroup: 'Мини-группы',
}
