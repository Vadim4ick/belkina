import { GetUserByEmailQuery } from '@/shared/graphql/__generated__'
import { create } from 'zustand'

type State = {
  profile: GetUserByEmailQuery['Users']['docs'][0] | null
  setProfile: (profile?: GetUserByEmailQuery['Users']['docs'][0]) => void
}

export const useProfileStore = create<State>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}))
