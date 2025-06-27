import { SingleTestPage } from '@/views/single-test'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  console.log('slug ==> ', slug)

  // передавать вместо SLUG name теста
  return <SingleTestPage title={slug} />
}
