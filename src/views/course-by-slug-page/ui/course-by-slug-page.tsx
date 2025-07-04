import { getServerGqlClient } from '@/shared/graphql/client'
import { Container } from '@/shared/ui/container'
import { CourseVideo } from '@/shared/ui/course-video'
import { Typography } from '@/shared/ui/typography'
import { notFound } from 'next/navigation'

const CourseBySlugPage = async ({ slug }: { slug: string }) => {
  const gql = await getServerGqlClient()

  const courses = await gql.GetCourseBySlug({ slug })

  if (!courses || !courses.Courses || !courses.Courses.docs.length) {
    return notFound()
  }

  const course = courses.Courses.docs[0]

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-6">
          <Typography className="pt-6" tag="h1" variant="visuelt-bold-48">
            {course.title}
          </Typography>

          <div className="grid grid-cols-[1.3fr_0.7fr] gap-4">
            <CourseVideo
              videoId={course.kinescopeVideos[0].kinescopeId}
              poster={course.banner.url}
            />

            <div className="flex flex-col gap-4">
              <Typography tag="p" variant="poppins-md-16">
                {course.description}
              </Typography>

              <div>test</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { CourseBySlugPage }
