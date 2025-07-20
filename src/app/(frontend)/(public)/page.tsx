import { Home } from '@/views/home'

export const revalidate = 180

export default async function HomePage() {
  return <Home />
}
