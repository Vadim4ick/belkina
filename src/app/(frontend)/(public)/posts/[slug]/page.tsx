import React from 'react'

import type { Post } from '@/payload-types'
import { gql } from '@/shared/graphql/client'
import RichText from '@/shared/ui/rich-text'
import { Typography } from '@/shared/ui/typography'
import { Container } from '@/shared/ui/container'
import { notFound } from 'next/navigation'

export default async function Post({
  params: paramsPromise,
}: {
  params: Promise<{
    slug?: string
  }>
}) {
  const { slug = '' } = await paramsPromise

  const res = await gql.GetPostBySlug({ slug })

  if (!res) {
    return notFound()
  }
  const post = res.Posts.docs?.[0]

  return (
    <article className="max-mobile:py-6 py-12">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-12">
          <Typography tag="h2" variant="visuelt-bold-48">
            {post.title}
          </Typography>
          <RichText className="flex flex-col" data={post.content} enableGutter={false} />
        </div>
      </Container>
    </article>
  )
}
