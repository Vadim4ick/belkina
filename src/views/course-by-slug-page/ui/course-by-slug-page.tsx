import { summClockTime } from '@/shared/lib/utils'
import { Container } from '@/shared/ui/container'
import { CourseVideo } from '@/shared/ui/course-video'
import { Typography } from '@/shared/ui/typography'
import { ProductCard } from '@/widgets/product-card'
import { ProductCardsGridCatalog } from '@/widgets/product-cards-grid-catalog'
import { NavigationPanel } from './navigation-panel'
import { getCourseBySlugPage } from '../model/getCourseBySlugPage'

const CourseBySlugPage = async ({ slug, videoId }: { slug: string; videoId: string }) => {
  const {
    course,
    videos,
    activeVideo,
    activeVideoId,
    prevVideo,
    nextVideo,
    purchase,
    hasAccessNavigation,
  } = await getCourseBySlugPage(slug, videoId)

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
                courseTariff={purchase.Purchases.docs?.[0]?.tariff}
                hasAccessNavigation={hasAccessNavigation}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-6">
        <Container>
          <ProductCardsGridCatalog
            isNull={videos.length === 0}
            title={`Все уроки из курса (${videos.length} видео. Общая длительность ${summClockTime(
              videos.map((video) => video.duration),
            )})`}
          >
            {videos?.length > 0 &&
              videos.map((product, idx) => (
                <ProductCard
                  key={idx}
                  title={product.title}
                  categories={course?.subjects?.map((subject) => subject.title)}
                  exams={course?.exams?.title}
                  duration={summClockTime([product.duration])}
                  description={course.description}
                  price={course.price}
                  discount={course.discount}
                  // image={course.banner}
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
