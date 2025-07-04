import { getServerGqlClient } from '@/shared/graphql/client'
import { summClockTime } from '@/shared/lib/utils'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import { ProductCard } from '@/widgets/product-card'
import { ProductCardsGridCatalog } from '@/widgets/product-cards-grid-catalog'
import { notFound } from 'next/navigation'

const CoursesPage = async () => {
  const gql = await getServerGqlClient()

  const courses = await gql.GetAllCourses()

  if (!courses?.Courses) {
    return notFound()
  }

  return (
    <>
      <section>
        <Container>
          {courses.Courses?.docs.length > 0 ? (
            <ProductCardsGridCatalog title="Курсы">
              {courses.Courses.docs.map((product) => (
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
                />
              ))}
            </ProductCardsGridCatalog>
          ) : (
            <div className="mt-12 flex items-center justify-center">
              <Typography variant="visuelt-bold-32">Курсы не найдены</Typography>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}

export { CoursesPage }
