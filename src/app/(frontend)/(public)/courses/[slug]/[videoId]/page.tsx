import { CourseBySlugPage } from '@/views/course-by-slug-page'

export const revalidate = 180

export default async function Page({ params }: { params: { slug: string; videoId: string } }) {
  const { slug, videoId } = await params

  return <CourseBySlugPage slug={slug} videoId={videoId} />
}
