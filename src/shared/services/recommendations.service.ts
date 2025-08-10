import { useQuery } from '@tanstack/react-query'
import { useGqlClient } from '../hooks/useGqlClient'

export const QUERY_KEYS = {
  recommendationByQuestionsIds: (questionsIds?: string[]) => [
    'recommendationByQuestionsIds',
    questionsIds,
  ],
}

export const useGetRecommendationQuestionByIds = ({
  questionsIds,
}: {
  questionsIds?: string[]
}) => {
  const gql = useGqlClient({})

  return useQuery({
    queryKey: QUERY_KEYS.recommendationByQuestionsIds(questionsIds),
    queryFn: async () => {
      if (!questionsIds) throw new Error('Missing testId or userId')

      try {
        return await gql.GetRecommendationsByQuestionsIDS2({
          questionsIds: questionsIds,
        })
      } catch (err) {
        console.error('getTestResultById', err)
        throw err
      }
    },
    enabled: !!questionsIds && questionsIds.length > 0,
  })
}
