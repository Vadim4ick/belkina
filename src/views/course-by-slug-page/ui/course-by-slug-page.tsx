import { gql } from '@/shared/graphql/client'
import { getRouteCourseBySlug } from '@/shared/lib/routes'
import { summClockTime } from '@/shared/lib/utils'
import { Container } from '@/shared/ui/container'
import { CourseVideo } from '@/shared/ui/course-video'
import { Typography } from '@/shared/ui/typography'
import { ProductCard } from '@/widgets/product-card'
import { ProductCardsGridCatalog } from '@/widgets/product-cards-grid-catalog'
import { notFound } from 'next/navigation'
import { NavigationPanel } from './navigation-panel'
import { auth } from '@/entities/user/auth'

const CourseBySlugPage = async ({ slug, videoId }: { slug: string; videoId: string }) => {
  const courses = await gql.GetCourseBySlug({ slug })

  const session = await auth()

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

              <NavigationPanel
                activeVideo={activeVideo}
                prevVideo={prevVideo}
                nextVideo={nextVideo}
                course={course}
              />
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
                  showButton={session?.user.tariffId === course.tariff.id}
                />
              ))}
          </ProductCardsGridCatalog>
        </Container>
      </section>
    </>
  )
}

export { CourseBySlugPage }
