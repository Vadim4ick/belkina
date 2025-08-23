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

    // получаем все тесты с ответами
    const res = await gql.GetNotCorrectedAnswers({ userId })

    const allWrongAnswers = res.TestResults.docs
      .flatMap((doc) => doc.answers)
      .filter((answer) => !answer.isCorrect)

    if (allWrongAnswers.length === 0) return []

    // собираем все recommendationIds (с повторами)
    const recommendationIds = allWrongAnswers
      .map((answer) => answer.question?.recommendation?.id)
      .filter(Boolean)

    let recommendationsMap = new Map()

    if (recommendationIds.length > 0) {
      const where = { OR: recommendationIds.map((id) => ({ id: { equals: id } })) }

      // @ts-ignore
      const recommendationsRes = await gql.GetRecommendationsByIds({ where })

      recommendationsMap = new Map(
        recommendationsRes.Recomendations.docs.map((doc) => [
          doc.id,
          {
            id: doc.id,
            title: doc.title,
            description: JSON.stringify(doc.description),
          },
        ]),
      )
    }

    // финальный ответ: вопрос → рекомендация (только у которых есть recommendation.id)
    return allWrongAnswers
      .filter((answer) => answer.question?.recommendation?.id) // 👈 исключаем пустые
      .map((answer) => ({
        title: answer.question.questionText,
        recommendation: recommendationsMap.get(answer.question.recommendation.id) ?? null,
      }))
  },
}
// /* eslint-disable @typescript-eslint/ban-ts-comment */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'

// export const GetUserRecommendationsResolver = {
//   resolve: async (
//     _: any,
//     {
//       userId,
//     }: {
//       userId: string
//     },
//   ) => {
//     const gql = await getServerAuthGqlClient({})

//     if (!userId) return []

//     const res = await gql.GetNotCorrectedAnswers({ userId })

//     const recommendationIds = Array.from(
//       new Map(
//         res.TestResults.docs
//           .flatMap((doc) => doc.answers)
//           .filter((answer) => !answer.isCorrect && answer.question?.recommendation?.id)
//           .map((answer) => {
//             const rec = answer.question.recommendation
//             return [rec.id, rec]
//           }),
//       ).values(),
//     ).map((rec) => rec.id)

//     if (recommendationIds.length === 0) return []

//     const where = { OR: recommendationIds.map((id) => ({ id: { equals: id } })) }

//     // @ts-ignore
//     const recommendationsRes = await gql.GetRecommendationsByIds({ where })

//     return recommendationsRes.Recomendations.docs.map((doc) => ({
//       ...doc,
//       description: JSON.stringify(doc.description),
//     }))
//   },
// }
