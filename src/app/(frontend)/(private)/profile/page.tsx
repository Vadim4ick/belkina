import { Profile } from '@/views/profile'

export const revalidate = 180

export default async function PageProfile() {
  return <Profile />
}
