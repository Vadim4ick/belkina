/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'

export const GetUserRecommendationsResolver = {
  resolve: async (
    _: any,
    {
      userId,
    }: {
      userId: string
    },
  ) => {
    const gql = await getServerAuthGqlClient({})

    if (!userId) return []

    const res = await gql.GetNotCorrectedAnswers({ userId })

    const recommendationIds = Array.from(
      new Map(
        res.TestResults.docs
          .flatMap((doc) => doc.answers)
          .filter((answer) => !answer.isCorrect && answer.question?.recommendation?.id)
          .map((answer) => {
            const rec = answer.question.recommendation
            return [rec.id, rec]
          }),
      ).values(),
    ).map((rec) => rec.id)

    if (recommendationIds.length === 0) return []

    const where = { OR: recommendationIds.map((id) => ({ id: { equals: id } })) }

    // @ts-ignore
    const recommendationsRes = await gql.GetRecommendationsByIds({ where })

    return recommendationsRes.Recomendations.docs.map((doc) => ({
      ...doc,
      description: JSON.stringify(doc.description),
    }))
  },
}
