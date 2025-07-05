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

  return (
    <>
      <section>
        <Container>
          <ProductCardsGridCatalog isNull={coursesVal?.Courses?.docs.length === 0} title="Курсы">
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
