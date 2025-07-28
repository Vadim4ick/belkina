import { CoursesPage } from '@/views/courses'
import { WebinarCalendar } from '@/widgets/webinar-calendar'

export const revalidate = 180

export default function Page() {
  return (
    <>
      {/* <CoursesPage /> */}
      <WebinarCalendar />
    </>
  )
}
