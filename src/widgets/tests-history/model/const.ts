import { StatusTestResult } from '@/entities/test'

export const MAPPING_TEST_HISTORY_MODE: Record<Exclude<StatusTestResult, 'all'>, string> = {
  completed: 'Пройден',
  in_progress: 'В процессе',
}
