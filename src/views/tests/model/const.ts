import type { TestResult_Status_All } from '@/shared/graphql/__generated__'

export const btnsCategoryTests = [
  {
    id: 0,
    title: 'Все',
  },
  {
    id: 1,
    title: 'Не начатые',
  },
  {
    id: 2,
    title: 'Пройденные',
  },
  {
    id: 3,
    title: 'В процессе',
  },
]

export const MAPPING_TEST_CATEGORY: Record<number, TestResult_Status_All> = {
  1: 'not_started',
  2: 'completed',
  3: 'in_progress',
}
