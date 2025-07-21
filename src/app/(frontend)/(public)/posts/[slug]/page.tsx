import React from 'react'

import type { Post } from '@/payload-types'
import { gql } from '@/shared/graphql/client'
import RichText from '@/shared/ui/rich-text'
import { Typography } from '@/shared/ui/typography'
import { Container } from '@/shared/ui/container'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getPostsBySlug } from '@/shared/actions/post.action'

export const revalidate = 60

export default async function Post({
  params: paramsPromise,
}: {
  params: Promise<{
    slug?: string
  }>
}) {
  const { slug = '' } = await paramsPromise

  const res = await getPostsBySlug({ slug })

  const post = res.Posts.docs?.[0]
  if (!post) {
    return notFound()
  }

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

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug?: string }>
}): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const res = await gql.GetPostBySlug({ slug })

  if (!res || !res.Posts.docs?.[0]) {
    return {
      title: 'Пост не найден',
      description: 'Запрошенный пост не существует',
    }
  }

  const post = res.Posts.docs[0]
  const imageUrl = post.image?.url || '/default-og-image.jpg'

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: post.title,
    description: post.description || 'Интересная статья от Belkina.online',
    alternates: {
      canonical: `/posts/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description || 'Интересная статья от Belkina.online',
      url: `/posts/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.image?.alt || post.title,
        },
      ],
    },
  }
}
