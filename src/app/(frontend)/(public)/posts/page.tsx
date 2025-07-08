import type { Metadata } from 'next/types'

import React from 'react'
import { CollectionArchive } from '@/widgets/collection-archive'
import { Typography } from '@/shared/ui/typography'
import { Container } from '@/shared/ui/container'
import { Pagination } from '@/shared/ui/pagination'
import { notFound } from 'next/navigation'
import { gql } from '@/shared/graphql/client'

export const dynamic = 'force-dynamic'
export const revalidate = 60

export default async function Page() {
  const res = await gql.GetPostList({ limit: 2, page: 1 })

  if (!res) {
    return notFound()
  }

  return (
    <section className="max-mobile:py-6 py-12">
      <Container>
        <Typography tag="h1" variant="visuelt-bold-48" className="mb-6">
          Блог Belkina.online
        </Typography>

        <CollectionArchive posts={res.Posts.docs} />

        <div className="w-full py-8">
          {res.Posts.totalPages > 1 && res.Posts.page && (
            <Pagination page={res.Posts.page} totalPages={res.Posts.totalPages} variant="server" />
          )}
        </div>
      </Container>
    </section>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Блог Belkina.online',
    description: 'Последние статьи и новости',
  }
}
