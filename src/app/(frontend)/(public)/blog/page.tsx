import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { CollectionArchive } from '@/widgets/collection-archive'
import { Typography } from '@/shared/ui/typography'
import { Container } from '@/shared/ui/container'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <section className="max-mobile:py-6 py-12">
      <Container>
        <Typography tag="h1" variant="visuelt-bold-48" className="mb-6">
          Блог Belkina.online
        </Typography>

        <CollectionArchive posts={posts.docs} />

        <div className="container">
          {/* {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )} */}
        </div>
      </Container>
    </section>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
