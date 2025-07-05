import { CourseBySlugPage } from '@/views/course-by-slug-page'

export const revalidate = 180

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: {
    video?: string
  }
}) {
  const { slug } = await params
  const { video } = await searchParams

  return <CourseBySlugPage slug={slug} videoId={video} />
}
