import { GetByIdTestResultQuery } from '@/shared/graphql/__generated__'
import { getRouteWebinars } from '@/shared/lib/routes'
import { getResultLevel } from '@/shared/lib/utils'
import { useGetRecommendationQuestionByIds } from '@/shared/services/recommendations.service'
import { Button } from '@/shared/ui/button'
import RichText from '@/shared/ui/rich-text'
import { Skeleton } from '@/shared/ui/skeleton'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'
import { memo } from 'react'

const CompletedInfo = memo(
  ({
    resetTestRes,
    totalCorrectAnswers,
    countQuestions,
    publicFlag,
    publicCorrectAnswers,
    testRes,
    publicRes,
  }: {
    totalCorrectAnswers: number
    resetTestRes: () => void
    countQuestions: number
    publicFlag: boolean
    publicCorrectAnswers: number
    testRes?: GetByIdTestResultQuery['TestResults']['docs'][0]
    publicRes?: string[]
  }) => {
    const percent = Math.round((totalCorrectAnswers / countQuestions) * 100)

    const score = publicFlag ? publicCorrectAnswers : totalCorrectAnswers
    const resultLevel = getResultLevel(percent)

    const questionNoCorrectIds = testRes?.answers
      .filter((a) => !a.isCorrect)
      .map((a) => a.question.id)

    const { data: recommendations, isLoading: isLoadingRecommendations } =
      useGetRecommendationQuestionByIds({
        questionsIds: publicFlag ? publicRes : questionNoCorrectIds?.map((id) => String(id)),
      })

    return (
      <div className="mx-auto w-full bg-white">
        <Typography tag="h2" variant="poppins-md-24" className="mb-4 text-left">
          🎉 Поздравляем! Вы прошли тест.
        </Typography>

        <ul className="mb-6 ml-4 list-disc text-left">
          <li>
            <Typography tag="p" variant="poppins-md-16" className="font-semibold">
              <b>Правильных ответов:</b> {score} из {countQuestions}
            </Typography>
          </li>

          <li>
            <b>Результат:</b> {percent}% — <b>{resultLevel}</b>
          </li>
        </ul>

        {recommendations && recommendations.GetRecommendationsByQuestionsIDS.length > 0 && (
          <>
            <Typography tag="h3" variant="poppins-md-16" className="mb-0 text-left">
              Рекомендации:
            </Typography>

            <div className="my-4 flex max-h-[400px] flex-col gap-4 overflow-auto">
              {recommendations.GetRecommendationsByQuestionsIDS.map((r, i) => (
                <div key={`${r.questionId}-${i}`} className="rounded-lg border bg-gray-50 p-3">
                  <Typography
                    tag="p"
                    variant="poppins-md-16"
                    className="mb-2 font-medium text-gray-700"
                  >
                    {r.questionText}
                  </Typography>

                  {r.recommendation ? (
                    <RichText
                      className="m-0 flex flex-col"
                      data={JSON.parse(r.recommendation.description)}
                      enableGutter={false}
                    />
                  ) : (
                    <Typography tag="p" variant="poppins-md-16" className="text-gray-500">
                      Для этого вопроса рекомендации пока нет.
                    </Typography>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {isLoadingRecommendations && (
          <Skeleton className="mb-6 ml-4 h-[50px] w-full max-w-[320px]" />
        )}

        <Typography tag="h3" variant="poppins-md-16" className="mb-2 text-left">
          Что дальше?
        </Typography>

        <div className="flex list-disc flex-col items-start gap-0.5">
          {!publicFlag && (
            <Button
              className="max-mobile:p-0"
              size={'sm'}
              type="button"
              variant={'ghostWhite'}
              onClick={resetTestRes}
            >
              🌀 Пройти тест ещё раз
            </Button>
          )}

          <Button className="max-mobile:p-0" size={'sm'} type="button" variant={'ghostWhite'}>
            <Link className="break-all" href={getRouteWebinars()}>
              🎓 Записаться на живой разбор заданий
            </Link>
          </Button>
        </div>
      </div>
    )
  },
)

export { CompletedInfo }
