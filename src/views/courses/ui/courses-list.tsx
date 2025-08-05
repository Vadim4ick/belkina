'use client'

import { Container } from '@/shared/ui/container'
import { ProductCard, SkeletonProductCard } from '@/widgets/product-card'
import { ProductCardsGridCatalog } from '@/widgets/product-cards-grid-catalog'
import { memo } from 'react'
import { Pagination, PaginationSkeleton } from '@/shared/ui/pagination'
import { GetAllExamsQuery, GetAllSubjectsQuery } from '@/shared/graphql/__generated__'
import { useGetAllCourses } from '@/shared/services/courses.service'
import { useCoursesStore } from '@/entities/courses/use-сourses-store'
import { FilterCategory } from '@/widgets/filter-category'
import { getRouteCourseBySlug } from '@/shared/lib/routes'
import { EmptyDataMessage } from '@/widgets/empty-data-message'

const CoursesList = memo(
  ({
    exams,
    subjects,
  }: {
    exams?: GetAllExamsQuery['Exams']['docs']
    subjects?: GetAllSubjectsQuery['Subjects']['docs']
  }) => {
    const { filters, setFilter } = useCoursesStore()

    const { data: courses, isLoading: isLoadingCourses } = useGetAllCourses({
      subject: filters.subjects && filters.subjects !== 1000 ? filters.subjects : undefined,
      exam: filters.exams && filters.exams !== 1000 ? filters.exams : undefined,
      page: filters.page,
    })

    return (
      <>
        <div className="py-6">
          <Container className="flex flex-col">
            <div className="flex justify-end">
              <FilterCategory exams={exams} subjects={subjects} isLoading={isLoadingCourses} />
            </div>
            <ProductCardsGridCatalog
              isNull={courses?.Courses?.docs.length === 0}
              // title="Каталог курсов"
            >
              {!isLoadingCourses && (
                <>
                  {courses?.Courses && courses?.Courses?.docs.length > 0 ? (
                    courses.Courses.docs.map((product) => (
                      <ProductCard
                        key={product.id}
                        title={product.title}
                        categories={product?.subjects?.map((subject) => subject.title) ?? []}
                        exams={product?.exams?.title}
                        duration={product.totalDuration}
                        description={product.description}
                        price={product.price}
                        discount={product.discount}
                        image={product.banner}
                        url={getRouteCourseBySlug({
                          slug: product.slug,
                          videoId: product.previewVideoId,
                        })}
                      />
                    ))
                  ) : (
                    <div className="mt-12 flex items-center justify-center">
                      {/* <Typography variant="visuelt-bold-32">Курсы не найдены</Typography> */}
                      <EmptyDataMessage
                        title="Курсы не найдены"
                        message="Измените параметры поиска или попробуйте снова."
                      />
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
                    variant="client"
                  />
                )}
              </div>
            )}
          </Container>
        </div>
      </>
    )
  },
)

export { CoursesList }
