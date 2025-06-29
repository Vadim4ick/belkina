import { StatusTestResult } from '@/entities/test'

export const TEST_BTN_TEXT: Record<StatusTestResult, string> = {
  all: 'Пройти тест',
  completed: 'Пройти снова',
  in_progress: 'Продолжить прохождение',
}
