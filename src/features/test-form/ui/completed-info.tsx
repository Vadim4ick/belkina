import { useProfileStore } from '@/entities/user/use-profile-store'
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
  }: {
    totalCorrectAnswers: number
    resetTestRes: () => void
    countQuestions: number
    publicFlag: boolean
    publicCorrectAnswers: number
    testRes?: GetByIdTestResultQuery['TestResults']['docs'][0]
  }) => {
    const { profile } = useProfileStore()

    const percent = Math.round((totalCorrectAnswers / countQuestions) * 100)

    const score = publicFlag ? publicCorrectAnswers : totalCorrectAnswers
    const resultLevel = getResultLevel(percent)

    const questionNoCorrectIds = testRes?.answers
      .filter((a) => !a.isCorrect)
      .map((a) => a.question.id)

    const { data: recommendations, isLoading: isLoadingRecommendations } =
      useGetRecommendationQuestionByIds({
        questionsIds: questionNoCorrectIds?.map((id) => String(id)),
      })

    if (publicFlag || !!!profile?.id) {
      return (
        <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-8 rounded-2xl border bg-white p-10 text-center shadow-lg">
          <div className="text-4xl">🎉</div>

          <div className="flex flex-col items-center justify-center gap-1">
            <Typography tag="p" variant="poppins-md-16" className="font-semibold">
              <b>Правильных ответов:</b> {score} из {countQuestions}
            </Typography>
            <p>
              <b>Результат:</b> {percent}%
            </p>
            <p>
              <b>{resultLevel}</b>
            </p>
          </div>

          <div className="flex list-disc flex-col items-start gap-0.5">
            <Button size={'sm'} type="button" variant={'ghostWhite'}>
              <Link href={getRouteWebinars()}>🎓 Записаться на живой разбор заданий</Link>
            </Button>
          </div>
        </div>
      )
    }

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

            <div className="max-h-[300px] overflow-auto">
              {recommendations.GetRecommendationsByQuestionsIDS.map((r) => (
                <RichText
                  key={r.id}
                  className="m-0 flex flex-col"
                  data={JSON.parse(r.description)}
                  enableGutter={false}
                />
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
          <Button size={'sm'} type="button" variant={'ghostWhite'} onClick={resetTestRes}>
            🌀 Пройти тест ещё раз
          </Button>

          <Button size={'sm'} type="button" variant={'ghostWhite'}>
            <Link href={getRouteWebinars()}>🎓 Записаться на живой разбор заданий</Link>
          </Button>
        </div>
      </div>
    )
  },
)

export { CompletedInfo }
