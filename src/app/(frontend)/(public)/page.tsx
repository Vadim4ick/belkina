import { getHomePage } from '@/shared/actions/home.action'
import { Home } from '@/views/home'
import { Metadata } from 'next'

export const revalidate = 0

export default async function HomePage() {
  return <Home />
}
