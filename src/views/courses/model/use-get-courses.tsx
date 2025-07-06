import { useCoursesStore } from '@/entities/courses/use-сourses-store'
import { useGetAllCourses } from '@/shared/services/courses.service'

const useGetCoursesPage = () => {
  const {
    filters,
    setFilter,
    exams: staticExams,
    subjects: staticSubjects,
    resetFilters,
    hasActiveFilters,
  } = useCoursesStore()

  const { data: courses, isLoading: isLoadingCourses } = useGetAllCourses({
    exam: filters.exams,
    subject: filters.subjects,
    page: filters.page,
  })

  return {
    isLoadingCourses,
    staticExams,
    setFilter,
    staticSubjects,
    courses,
    filters,
    resetFilters,
    hasActiveFilters,
  }
}

export { useGetCoursesPage }
