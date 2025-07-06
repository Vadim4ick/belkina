import { create } from 'zustand'
import { BtnCategory } from './types'

interface CoursesState {
  filters: {
    exams?: number
    subjects?: number
    page: number
  }
  setFilter: (name: 'exams' | 'subjects' | 'page', value: number) => void
  resetFilters: () => void
  hasActiveFilters: () => boolean

  exams: BtnCategory[]
  subjects: BtnCategory[]
  setExams: (exams: BtnCategory[]) => void
  setSubjects: (subjects: BtnCategory[]) => void
}

export const useCoursesStore = create<CoursesState>((set, get) => ({
  filters: {
    exams: undefined,
    subjects: undefined,
    page: 1,
  },
  setFilter: (name, value) =>
    set((state) => ({
      filters: { ...state.filters, [name]: value },
    })),
  resetFilters: () =>
    set(() => ({
      filters: { exams: undefined, subjects: undefined, page: 1 },
    })),
  hasActiveFilters: () => {
    const { filters } = get()
    return filters.exams !== undefined || filters.subjects !== undefined
  },

  exams: [],
  subjects: [],
  setExams: (exams) => set({ exams }),
  setSubjects: (subjects) => set({ subjects }),
}))
