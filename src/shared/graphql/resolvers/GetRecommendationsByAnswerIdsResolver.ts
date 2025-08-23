/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'

export const GetRecommendationsByAnswerIdsResolver = {
  resolve: async (
    _: any,
    {
      answerIds,
    }: {
      answerIds: string[]
    },
  ) => {
    if (!answerIds?.length) return []

    const gql = await getServerAuthGqlClient({})

    const where = { OR: answerIds.map((id) => ({ id: { equals: Number(id) } })) }

    // Получаем конкретные ответы по id
    // @ts-ignore
    const res = await gql.GetRecommendationsByQuestionsIds({ where: where })

    const questions = res.Questions.docs

    const recommendationsIds = questions.map((q) => q?.recommendation?.id).filter(Boolean)

    if (!recommendationsIds.length) return []

    const whereRecommendation = {
      OR: recommendationsIds.map((id) => ({ id: { equals: id } })),
    }

    // @ts-ignore
    const recommendationsRes = await gql.GetRecommendationsByIds({ where: whereRecommendation })

    const recommendationsMap = new Map(
      recommendationsRes.Recomendations.docs.map((doc) => [
        doc.id,
        {
          id: doc.id,
          title: doc.title,
          description: JSON.stringify(doc.description),
        },
      ]),
    )

    return questions
      .filter((q) => q?.recommendation?.id)
      .map((q) => ({
        questionId: q.id,
        questionText: q.questionText,
        recommendation: recommendationsMap.get(q.recommendation.id) ?? null,
      }))
  },
}

// /* eslint-disable @typescript-eslint/ban-ts-comment */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'

// export const GetRecommendationsByAnswerIdsResolver = {
//   resolve: async (
//     _: any,
//     {
//       answerIds,
//     }: {
//       answerIds: string[]
//     },
//   ) => {
//     if (!answerIds?.length) return []

//     const gql = await getServerAuthGqlClient({})

//     const where = { OR: answerIds.map((id) => ({ id: { equals: Number(id) } })) }

//     // Получаем конкретные ответы по id
//     // @ts-ignore
//     const res = await gql.GetRecommendationsByQuestionsIds({ where: where })

//     const recommendationsIds = res.Questions.docs
//       .map((answer) => answer?.recommendation)
//       .filter((rec) => rec?.id)

//     const uniqueRecommendationIds = Array.from(new Set(recommendationsIds.map((rec) => rec.id)))

//     if (uniqueRecommendationIds.length === 0) return []

//     const whereRecommendation = {
//       OR: uniqueRecommendationIds.map((id) => ({ id: { equals: id } })),
//     }

//     // @ts-ignore
//     const recommendationsRes = await gql.GetRecommendationsByIds({ where: whereRecommendation })

//     return recommendationsRes.Recomendations.docs.map((doc) => ({
//       title: doc.title,
//       description: JSON.stringify(doc.description),
//     }))
//   },
// }
