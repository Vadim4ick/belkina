import { TestResult_Status } from '@/shared/graphql/__generated__'

export type MatchOption = {
  text: string
}

export type MatchTestQuestion = {
  id: string
  title: string
  leftColumn: MatchOption[]
  rightColumn: MatchOption[]
}

export type StatusTestResult = TestResult_Status | 'all'
