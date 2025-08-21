import { TestByIdPage } from '@/views/test-by-id'

export const revalidate = 180

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return <TestByIdPage id={id} />
}
