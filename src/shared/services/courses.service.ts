/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import { useGqlClient } from '../hooks/useGqlClient'

export const useGetAllCourses = ({ exam, subject }: { exam?: number; subject?: number }) => {
  const gql = useGqlClient()

  const where: Record<'exams' | 'subject', any> = {
    exams: undefined,
    subject: undefined,
  }

  if (exam) {
    where.exams = { equals: exam }
  }

  if (subject) {
    where.subject = { equals: subject }
  }

  return useQuery({
    queryKey: ['getAllCourses', exam, subject],
    queryFn: async () => {
      try {
        return await gql.GetAllCourses(where)
      } catch (err) {
        console.error('getAllCourses', err)
        throw err
      }
    },
  })
}
