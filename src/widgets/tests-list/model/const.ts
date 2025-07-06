import { TestResult_Status_All } from '@/shared/graphql/__generated__'

export const TEST_BTN_TEXT: Record<TestResult_Status_All, string> = {
  not_started: 'Пройти тест',
  completed: 'Пройти снова',
  in_progress: 'Продолжить прохождение',
}
