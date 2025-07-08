import type { Metadata } from 'next/types'

import React from 'react'
import { CollectionArchive } from '@/widgets/collection-archive'
import { Typography } from '@/shared/ui/typography'
import { Container } from '@/shared/ui/container'
import { gql } from '@/shared/graphql/client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const limit = 12

  const res = await gql.GetPostList({ limit })

  if (!res) {
    return <h1>Посты не найдены</h1>
  }

  const { Posts: posts } = res

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
