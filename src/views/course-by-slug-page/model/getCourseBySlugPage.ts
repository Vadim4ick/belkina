import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'
import { JwtService } from '@/shared/services/jwt-service'
import { KinescopeVideoItem } from '@/shared/types/kinescope.types'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

export const getCourseBySlugPage = async (slug: string, videoId: string) => {
  const gql = await getServerAuthGqlClient({})
  const courses = await gql.GetCourseBySlug({ slug })

  if (!courses?.Courses?.docs?.length) {
    return notFound()
  }

  const course = courses.Courses.docs[0]
  const videos = (course.kinescopeVideos as KinescopeVideoItem[]) || []

  const activeVideo = videos.find((v) => v.kinescopeId === videoId)
  const activeIdx = videos.findIndex((v) => v.kinescopeId === videoId)
  const isFirstVideo = activeIdx === 0

  const prevVideo = activeIdx > 0 ? videos[activeIdx - 1] : null
  const nextVideo = activeIdx < videos.length - 1 ? videos[activeIdx + 1] : null

  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const payload = await JwtService.verifyToken(accessToken)

  const purchase = await gql.GetPurchaseById({
    courseId: course.id,
    userId: payload?.id || null,
  })

  const tariffId = purchase?.Purchases?.docs?.[0]?.tariff?.id

  const hasAccess = isFirstVideo || !!tariffId || course.isFree

  const hasAccessNavigation = !!tariffId || course.isFree

  if (!activeVideo || !hasAccess) {
    return notFound()
  }

  return {
    course,
    videos,
    activeVideo,
    prevVideo,
    nextVideo,
    activeVideoId: videoId,
    purchase,
    hasAccessNavigation,
  }
}
