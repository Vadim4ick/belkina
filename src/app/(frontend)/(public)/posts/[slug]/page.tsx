// import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import type { Post } from '@/payload-types'
import { gql } from '@/shared/graphql/client'
import RichText from '@/shared/ui/rich-text'
import { Typography } from '@/shared/ui/typography'
import { Container } from '@/shared/ui/container'

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })
    const posts = await payload.find({ collection: 'posts', limit: 1000 })

    return posts.docs.map(({ slug }) => ({ slug }))
  } catch (e) {
    console.error('Ошибка при генерации параметров:', e)
    return []
  }
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise

  const [res] = await Promise.allSettled([gql.GetPostBySlug({ slug })])
  const resVal = res.status === 'fulfilled' ? res.value : null
  if (!resVal) {
    return <h1>Пост не найден</h1>
  }
  const { Posts } = resVal
  const post = Posts.docs[0]

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
