'use client'

import { TabCategory } from '@/features/tab-categories'
import { getRouteCourseBySlug } from '@/shared/lib/routes'
import { summClockTime } from '@/shared/lib/utils'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import { ProductCard, SkeletonProductCard } from '@/widgets/product-card'
import { ProductCardsGridCatalog } from '@/widgets/product-cards-grid-catalog'
import { memo } from 'react'
import { useGetCoursesPage } from '../model/use-get-courses'
import { Button } from '@/shared/ui/button'
import { Pagination, PaginationSkeleton } from '@/shared/ui/pagination'
import { GetAllExamsQuery, GetAllSubjectsQuery } from '@/shared/graphql/__generated__'

const CoursesList = memo(
  ({
    exams,
    subjects,
  }: {
    exams?: GetAllExamsQuery['Exams']['docs']
    subjects?: GetAllSubjectsQuery['Subjects']['docs']
  }) => {
    const { filters, resetFilters, hasActiveFilters, setFilter, isLoadingCourses, courses } =
      useGetCoursesPage()

    return (
      <>
        <section className="mt-12">
          <Container className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Typography tag="h2" variant="visuelt-bold-48">
                Курсы
              </Typography>

              <TabCategory
                btns={exams?.map((el) => el)}
                name="exams"
                value={filters.exams}
                isLoading={isLoadingCourses}
                onChange={setFilter}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <TabCategory
                btns={subjects?.map((el) => el)}
                name="subjects"
                value={filters.subjects}
                isLoading={isLoadingCourses}
                onChange={setFilter}
              />
              {hasActiveFilters() && (
                <Button
                  onClick={resetFilters}
                  className="h-[32px]"
                  variant="primary-inverted"
                  size="sm"
                >
                  Сбросить фильтры
                </Button>
              )}
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <ProductCardsGridCatalog
              isNull={courses?.Courses?.docs.length === 0}
              title="Каталог курсов"
            >
              {!isLoadingCourses && (
                <>
                  {courses?.Courses && courses?.Courses?.docs.length > 0 ? (
                    courses.Courses.docs.map((product) => (
                      <ProductCard
                        key={product.id}
                        title={product.title}
                        categories={product.subjects.map((subject) => subject.title)}
                        exams={product.exams.title}
                        duration={summClockTime(
                          product.kinescopeVideos.map((video) => video.duration),
                        )}
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
                </>
              )}

              {isLoadingCourses &&
                Array.from({ length: 3 }).map((_, i) => <SkeletonProductCard key={i} />)}
            </ProductCardsGridCatalog>

            {courses && courses?.Courses?.totalPages > 1 && (
              <div className="flex w-full items-center justify-center">
                {isLoadingCourses ? (
                  <PaginationSkeleton />
                ) : (
                  <Pagination
                    page={courses?.Courses?.page ?? 1}
                    totalPages={courses?.Courses?.totalPages ?? 1}
                    onPageChange={(page) => setFilter('page', page)}
                    isLoading={isLoadingCourses}
                  />
                )}
              </div>
            )}
          </Container>
        </section>
      </>
    )
  },
)

export { CoursesList }
