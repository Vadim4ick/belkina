import { TestResult_Status_All } from '@/shared/graphql/__generated__'

export const MAPPING_TEST_HISTORY_MODE: Record<Exclude<TestResult_Status_All, 'all'>, string> = {
  completed: 'Пройден',
  in_progress: 'В процессе',
  not_started: 'Не начат',
}
