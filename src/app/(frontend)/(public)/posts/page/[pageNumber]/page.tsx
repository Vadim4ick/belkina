import type { Metadata } from 'next/types'

import React from 'react'
import { CollectionArchive } from '@/widgets/collection-archive'
import { Typography } from '@/shared/ui/typography'
import { Container } from '@/shared/ui/container'
import { gql } from '@/shared/graphql/client'
import { Pagination } from '@/shared/ui/pagination'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const revalidate = 60

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}
export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise

  const res = await gql.GetPostList({ limit: 2, page: +pageNumber })

  if (!res) {
    return notFound()
  }

  const { Posts: posts } = res

  return (
    <section className="max-mobile:py-6 py-12">
      <Container>
        <Typography tag="h1" variant="visuelt-bold-48" className="mb-6">
          Блог Belkina.online
        </Typography>

        <CollectionArchive posts={posts.docs} />

        <div className="w-full py-8">
          {posts.totalPages > 1 && posts.page && (
            <Pagination page={posts.page} totalPages={posts.totalPages} variant="server" />
          )}
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
