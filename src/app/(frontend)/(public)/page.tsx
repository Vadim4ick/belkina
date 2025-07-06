import { Home } from '@/views/home'

export const revalidate = 360

export default async function HomePage() {
  return <Home />
}
