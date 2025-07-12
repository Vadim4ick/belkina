'use client'

import {
  CourseFragmentFragment,
  GetCourseBySlugQuery,
  Kinescope_Video_FragmentFragment,
} from '@/shared/graphql/__generated__'
import { Arrow } from '@/shared/icons/arrow'
import {
  getRouteAuth,
  getRouteCourseBySlug,
  getRouteTariffs,
  getRouteTestById,
} from '@/shared/lib/routes'
import { useGetTestResultById } from '@/shared/services/test.service'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'
import { Skeleton } from '@/shared/ui/skeleton'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { cn } from '@/shared/lib/utils'

const NavigationPanel = ({
  activeVideo,
  prevVideo,
  nextVideo,
  course,
}: {
  activeVideo: GetCourseBySlugQuery['Courses']['docs'][0]['kinescopeVideos'][0]
  prevVideo: Kinescope_Video_FragmentFragment | null
  nextVideo: Kinescope_Video_FragmentFragment | null
  course: CourseFragmentFragment
}) => {
  const { status, data: session } = useSession()

  const userId = session?.user?.id

  const {
    data: testResult,
    isLoading,
    isFetching,
    refetch,
  } = useGetTestResultById({ testId: activeVideo.test?.id, userId })

  useEffect(() => {
    if (status !== 'authenticated') return

    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  const loading = isLoading || isFetching || status === 'loading'

  const isCompleted = testResult?.TestResults?.docs?.[0]?.status === 'completed'

  return (
    <aside
      className={cn('tablet:p-2 flex h-full flex-col gap-8', {
        'justify-between': session?.user.tariffId === course.tariff.id,
      })}
    >
      <Typography tag="h1" variant="visuelt-bold-32" className="max-tablet:hidden mb-2">
        {activeVideo.title}
      </Typography>

      {session?.user.tariffId === course.tariff.id || course.tariff.isFree ? (
        <>
          {activeVideo.test && (
            <div className="mb-2 flex min-h-[120px] flex-col items-start gap-3 rounded-2xl border border-violet-100 bg-white/80 px-6 py-5 shadow-sm">
              <span className="text-xs font-medium text-gray-500">Тест после урока</span>

              {loading ? (
                <>
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-10 w-32 rounded-xl" />
                </>
              ) : (
                <>
                  <div className="flex w-full items-center justify-between gap-1">
                    <Typography tag="div" variant="poppins-md-16" className="mb-1">
                      {activeVideo.test.title}
                    </Typography>

                    {isCompleted && (
                      <Typography tag="div" variant="poppins-reg-14" className="text-green-600">
                        ✅ Тест пройден
                      </Typography>
                    )}
                  </div>

                  <Link
                    href={
                      status !== 'authenticated'
                        ? getRouteAuth()
                        : getRouteTestById({ id: activeVideo.test.id })
                    }
                    target="_blank"
                  >
                    <Button
                      size={'sm'}
                      variant="primary"
                      className="rounded-xl px-8 shadow"
                      disabled={loading}
                    >
                      {isCompleted ? 'Посмотреть результат' : 'Пройти тест'}
                    </Button>
                  </Link>
                </>
              )}
            </div>
          )}

          <div className="mt-auto flex w-full flex-col gap-2">
            {prevVideo && (
              <Link
                href={getRouteCourseBySlug({
                  slug: course.slug,
                  videoId: prevVideo.kinescopeId,
                })}
                className="w-full"
              >
                <Button
                  addonLeft={<Arrow className="text-white" />}
                  variant="primary-inverted"
                  className="flex w-full items-center justify-center gap-1 rounded-xl"
                >
                  Предыдущий урок
                </Button>
              </Link>
            )}
            {nextVideo && (
              <Link
                href={getRouteCourseBySlug({
                  slug: course.slug,
                  videoId: nextVideo.kinescopeId,
                })}
                className="w-full"
              >
                <Button
                  addonRight={<Arrow className="rotate-180 text-white" />}
                  className="flex w-full items-center justify-center gap-1 rounded-xl"
                >
                  Следующий урок
                </Button>
              </Link>
            )}
          </div>
        </>
      ) : (
        <div className="w-full rounded-2xl border border-violet-100 bg-white/80 px-6 py-5 text-center shadow-sm">
          <Typography tag="p" variant="poppins-md-16" className="mb-2">
            Для доступа к этому курсу необходим тариф&nbsp;
            <span className="font-semibold">{course.tariff.title}</span>.
          </Typography>
          <Typography tag="p" variant="poppins-reg-14" className="mb-4 text-gray-600">
            Выберите подходящий тариф и откройте все уроки и материалы курса.
          </Typography>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={getRouteTariffs()} // сюда лучше заменить на конкретный URL оплаты, если есть
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" className="w-full rounded-xl px-6 shadow sm:w-auto">
                Оплатить
              </Button>
            </Link>

            <Link target="_blank" href={getRouteTariffs()} className="w-full sm:w-auto">
              <Button variant="primary" className="w-full rounded-xl px-6 shadow sm:w-auto">
                Все тарифы
              </Button>
            </Link>
          </div>
        </div>
      )}
    </aside>
  )
}

export { NavigationPanel }
