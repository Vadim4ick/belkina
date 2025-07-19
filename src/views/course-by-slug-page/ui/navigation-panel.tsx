'use client'

import { CourseFragmentFragment } from '@/shared/graphql/__generated__'
import { Arrow } from '@/shared/icons/arrow'
import { getRouteCourseBySlug, getRouteTestById } from '@/shared/lib/routes'
import { useGetTestResultById } from '@/shared/services/test.service'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import Link from 'next/link'
import { Skeleton } from '@/shared/ui/skeleton'
import { useEffect, useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { KinescopeVideoItem } from '@/shared/types/kinescope.types'
import { useProfileStore } from '@/entities/user/use-profile-store'
import { PaywallModal } from '@/features/paywall-modal'

const NavigationPanel = ({
  activeVideo,
  prevVideo,
  nextVideo,
  course,
}: {
  activeVideo: KinescopeVideoItem
  prevVideo: KinescopeVideoItem | null
  nextVideo: KinescopeVideoItem | null
  course: CourseFragmentFragment
}) => {
  const { profile } = useProfileStore()

  const [showModal, setShowModal] = useState(false)

  const {
    data: testResult,
    isLoading,
    isFetching,
    refetch,
  } = useGetTestResultById({ testId: activeVideo.test?.id, userId: profile?.id })

  useEffect(() => {
    if (!profile?.id) return

    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile])

  const loading = isLoading || isFetching

  const isCompleted = testResult?.TestResults?.docs?.[0]?.status === 'completed'

  return (
    <aside className={cn('tablet:p-2 flex h-full flex-col gap-8')}>
      <Typography tag="h1" variant="visuelt-bold-32" className="max-tablet:hidden mb-2">
        {activeVideo.title}
      </Typography>

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

                <Link href={getRouteTestById({ id: activeVideo.test.id })} target="_blank">
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
          {prevVideo && prevVideo.kinescopeId && (
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
            <>
              {nextVideo.kinescopeId ? (
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
              ) : (
                <Button
                  onClick={() => setShowModal(true)}
                  addonRight={<Arrow className="rotate-180 text-white" />}
                  className="flex w-full items-center justify-center gap-1 rounded-xl"
                >
                  Следующий урок
                </Button>
              )}
            </>
          )}
        </div>
      </>

      <PaywallModal open={showModal} onOpenChange={setShowModal} />
    </aside>
  )
}

export { NavigationPanel }
