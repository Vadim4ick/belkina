'use client'

import { create } from 'zustand'
import { Session } from 'next-auth'

interface AuthStore {
  session: Session | null
  setSession: (session: Session | null) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}))
