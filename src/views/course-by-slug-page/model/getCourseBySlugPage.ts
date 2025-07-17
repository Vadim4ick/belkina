import { getServerAuthGqlClient } from '@/shared/actions/getServerAuthGqlClient'
import { KinescopeVideoItem } from '@/shared/types/kinescope.types'
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
  const prevVideo = activeIdx > 0 ? videos[activeIdx - 1] : null
  const nextVideo = activeIdx < videos.length - 1 ? videos[activeIdx + 1] : null

  if (!activeVideo) {
    return notFound()
  }

  return {
    course,
    videos,
    activeVideo,
    prevVideo,
    nextVideo,
    activeVideoId: videoId,
  }
}
