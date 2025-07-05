import { useCoursesStore } from '@/entities/courses/use-сourses-store'
import { getUniqueExamsByKey, getUniqueSubjectsFromNestedArray } from '@/features/tab-categories'
import { useGetAllCourses } from '@/shared/services/courses.service'
import { useEffect } from 'react'

const useGetCoursesPage = () => {
  const {
    filters,
    setFilter,
    exams: staticExams,
    subjects: staticSubjects,
    setExams,
    resetFilters,
    hasActiveFilters,
    setSubjects,
  } = useCoursesStore()

  const { data: courses, isLoading: isLoadingCourses } = useGetAllCourses({
    exam: filters.exams,
    subject: filters.subjects,
  })

  useEffect(() => {
    if (
      !isLoadingCourses &&
      staticExams.length === 0 &&
      courses &&
      courses?.Courses?.docs.length > 0
    ) {
      setExams(
        getUniqueExamsByKey(
          courses.Courses.docs.map((course) => ({
            title: course.exams.title,
            id: course.exams.id,
          })),
          'id',
        ),
      )

      setSubjects(
        getUniqueSubjectsFromNestedArray(
          courses.Courses.docs.map((course) =>
            course.subjects.map((subject) => ({
              title: subject.title,
              id: subject.id,
            })),
          ),
          'id',
        ),
      )
    }
  }, [courses, isLoadingCourses, staticExams.length, setExams, setSubjects])

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
