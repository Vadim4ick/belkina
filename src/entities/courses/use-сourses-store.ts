import { create } from 'zustand'

interface CoursesState {
  filters: {
    exams?: number
    subjects?: number
    page: number
  }
  setFilter: (name: 'exams' | 'subjects' | 'page', value: number) => void
}

export const useCoursesStore = create<CoursesState>((set) => ({
  filters: {
    exams: 1000,
    subjects: 1000,
    page: 1,
  },
  setFilter: (name, value) =>
    set((state) => ({
      filters: { ...state.filters, [name]: value },
    })),
}))
