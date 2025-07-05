import { getServerGqlClient } from '@/shared/graphql/client'
import { Arrow } from '@/shared/icons/arrow'
import { getRouteCourseBySlug, getRouteTestById } from '@/shared/lib/routes'
import { summClockTime } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { CourseVideo } from '@/shared/ui/course-video'
import { Typography } from '@/shared/ui/typography'
import { ProductCard } from '@/widgets/product-card'
import { ProductCardsGridCatalog } from '@/widgets/product-cards-grid-catalog'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const CourseBySlugPage = async ({ slug, videoId }: { slug: string; videoId: string }) => {
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

            <div className="max-tablet:grid-cols-1 grid grid-cols-[1.3fr_0.7fr] gap-4">
              <Typography tag="h1" variant="visuelt-bold-32" className="tablet:hidden mb-2">
                {activeVideo.title}
              </Typography>

              <CourseVideo videoId={activeVideoId || ''} poster={course.banner.url} />

              <aside className="tablet:p-2 flex h-full flex-col justify-between gap-8">
                {/* Заголовок урока */}
                <Typography tag="h1" variant="visuelt-bold-32" className="max-tablet:hidden mb-2">
                  {activeVideo.title}
                </Typography>

                {/* Блок теста */}
                {activeVideo.test && (
                  <div className="mb-2 flex flex-col items-start gap-3 rounded-2xl border border-violet-100 bg-white/80 px-6 py-5 shadow-sm">
                    <span className="text-xs font-medium text-gray-500">Тест после урока</span>
                    <Typography tag="div" variant="poppins-md-16" className="mb-1">
                      {activeVideo.test.title}
                    </Typography>

                    <Link
                      href={getRouteTestById({
                        id: activeVideo.test.id,
                      })}
                      target="_blank"
                    >
                      <Button variant="primary" className="rounded-xl px-8 shadow">
                        Пройти тест
                      </Button>
                    </Link>
                  </div>
                )}

                {/* Навигация по урокам */}
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
                        addonLeft={<Arrow className="rotate-180" />}
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
                        addonRight={<Arrow />}
                        className="flex w-full items-center justify-center gap-1 rounded-xl"
                      >
                        Следующий урок
                      </Button>
                    </Link>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-6">
        <Container>
          <ProductCardsGridCatalog isNull={videos.length === 0} title="Все уроки из курса">
            {videos?.length > 0 &&
              videos.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  categories={course.subjects.map((subject) => subject.title)}
                  exams={course.exams.title}
                  duration={summClockTime([product.duration])}
                  description={course.description}
                  price={course.price}
                  discount={course.discount}
                  image={course.banner}
                  url={getRouteCourseBySlug({
                    slug: course.slug,
                    videoId: product.kinescopeId,
                  })}
                  btnText="Перейти"
                  btnDisabled={videoId === product.kinescopeId}
                  showFooter={false}
                />
              ))}
          </ProductCardsGridCatalog>
        </Container>
      </section>
    </>
  )
}

export { CourseBySlugPage }
