import { getServerGqlClient } from '@/shared/graphql/client'
import { getRouteCourseBySlug } from '@/shared/lib/routes'
import { summClockTime } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { CourseVideo } from '@/shared/ui/course-video'
import { Typography } from '@/shared/ui/typography'
import { ProductCard } from '@/widgets/product-card'
import { ProductCardsGridCatalog } from '@/widgets/product-cards-grid-catalog'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const CourseBySlugPage = async ({ slug, videoId }: { slug: string; videoId?: string }) => {
  const gql = await getServerGqlClient()

  const courses = await gql.GetCourseBySlug({ slug })

  if (!courses || !courses.Courses || !courses.Courses.docs.length) {
    return notFound()
  }

  const course = courses.Courses.docs[0]
  const videos = course.kinescopeVideos || []

  const activeVideoId = videoId
  const activeVideo = videos.find((v) => v.kinescopeId === activeVideoId)
  const activeIdx = videos.findIndex((v) => v.kinescopeId === activeVideoId)

  const prevVideo = activeIdx > 0 ? videos[activeIdx - 1] : null
  const nextVideo = activeIdx < videos.length - 1 ? videos[activeIdx + 1] : null

  if (!activeVideo) {
    return notFound()
  }

  return (
    <>
      <section key={videoId}>
        <Container>
          <div className="flex flex-col gap-6">
            <Typography className="pt-6" tag="h1" variant="visuelt-bold-48">
              {course.title}
            </Typography>

            <div className="grid grid-cols-[1.3fr_0.7fr] gap-4">
              <CourseVideo videoId={activeVideoId || ''} poster={course.banner.url} />

              <div className="flex flex-col justify-between gap-4">
                <Typography tag="p" variant="poppins-md-16">
                  {activeVideo.title}
                </Typography>

                <div className="flex w-full flex-col gap-4">
                  {prevVideo && (
                    <Link
                      className="w-full"
                      href={getRouteCourseBySlug({
                        slug: course.slug,
                        videoId: prevVideo.kinescopeId,
                      })}
                    >
                      <Button variant="primary-inverted" className="w-full">
                        Предыдущий урок
                      </Button>
                    </Link>
                  )}

                  {nextVideo && (
                    <Link
                      className="w-full"
                      href={getRouteCourseBySlug({
                        slug: course.slug,
                        videoId: nextVideo.kinescopeId,
                      })}
                    >
                      <Button className="w-full">Следующий урок</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <ProductCardsGridCatalog isNull={videos.length === 0} title="Все уроки из курса">
            {videos?.length > 0 &&
              videos.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  categories={course.subjects.map((subject) => subject.title)}
                  exams={course.exams.title}
                  duration={summClockTime(course.kinescopeVideos.map((video) => video.duration))}
                  description={course.description}
                  price={course.price}
                  discount={course.discount}
                  image={course.banner}
                  url={getRouteCourseBySlug({
                    slug: course.slug,
                    videoId: course.kinescopeVideos[0]?.kinescopeId,
                  })}
                />
              ))}
          </ProductCardsGridCatalog>
        </Container>
      </section>
    </>
  )
}

export { CourseBySlugPage }
