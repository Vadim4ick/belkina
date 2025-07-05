import {
  getUniqueExamsByKey,
  getUniqueSubjectsFromNestedArray,
  TabCategory,
} from '@/features/tab-categories'
import { TariffList } from '@/features/tariff-list'
import { getServerGqlClient } from '@/shared/graphql/client'
import { getRouteCourseBySlug } from '@/shared/lib/routes'
import { getSettledValue, summClockTime } from '@/shared/lib/utils'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import { ProductCard } from '@/widgets/product-card'
import { ProductCardsGridCatalog } from '@/widgets/product-cards-grid-catalog'

const CoursesPage = async () => {
  const gql = await getServerGqlClient()

  const [tarrifs, courses] = await Promise.allSettled([gql.GetTaraffis(), gql.GetAllCourses()])

  const tarrifsVal = getSettledValue(tarrifs)
  const coursesVal = getSettledValue(courses)

  const exams = getUniqueExamsByKey(
    coursesVal?.Courses.docs.map((course) => ({
      title: course.exams.title,
      code: course.exams.code,
    })) ?? [],
    'code',
  )

  const subjects = getUniqueSubjectsFromNestedArray(
    coursesVal?.Courses.docs.map((course) =>
      course.subjects.map((subject) => ({
        title: subject.title,
        code: subject.code,
      })),
    ) ?? [],
    'code',
  )

  return (
    <>
      <section className="mt-12">
        <Container className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <Typography tag="h2" variant="visuelt-bold-48">
              Курсы
            </Typography>

            <TabCategory btns={exams} />
          </div>

          <TabCategory variant="secondary" btns={subjects} />
        </Container>
      </section>

      <section>
        <Container>
          <ProductCardsGridCatalog
            isNull={coursesVal?.Courses?.docs.length === 0}
            title="Каталог курсов"
          >
            {coursesVal?.Courses && coursesVal?.Courses?.docs.length > 0 ? (
              coursesVal.Courses.docs.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  categories={product.subjects.map((subject) => subject.title)}
                  exams={product.exams.title}
                  duration={summClockTime(product.kinescopeVideos.map((video) => video.duration))}
                  description={product.description}
                  price={product.price}
                  discount={product.discount}
                  image={product.banner}
                  url={getRouteCourseBySlug({
                    slug: product.slug,
                    videoId: product.kinescopeVideos[0]?.kinescopeId,
                  })}
                />
              ))
            ) : (
              <div className="mt-12 flex items-center justify-center">
                <Typography variant="visuelt-bold-32">Курсы не найдены</Typography>
              </div>
            )}
          </ProductCardsGridCatalog>
        </Container>
      </section>

      <TariffList tarrifs={tarrifsVal?.Tariffs.docs} />
    </>
  )
}

export { CoursesPage }
