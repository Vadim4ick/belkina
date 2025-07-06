import { create } from 'zustand'

interface CoursesState {
  filters: {
    examId?: number
    subjectId?: number
    categoryIdx: number
  }
  setFilter: (name: 'examId' | 'subjectId', value: number) => void
  setCategoryIdx: (value: number) => void
}

export const useTestsStore = create<CoursesState>((set) => ({
  filters: {
    examId: 1000,
    subjectId: 1000,
    categoryIdx: 0,
  },
  setFilter: (name, value) =>
    set((state) => ({
      filters: { ...state.filters, [name]: value },
    })),

  setCategoryIdx: (value) =>
    set((state) => ({
      filters: { ...state.filters, categoryIdx: value },
    })),
}))
