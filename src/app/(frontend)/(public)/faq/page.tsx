import { Container } from '@/shared/ui/container'

import { FaqPage } from '@/views/faqs'

export const revalidate = 180

async function Page() {
  return (
    <Container>
      <FaqPage />
    </Container>
  )
}

export default Page
