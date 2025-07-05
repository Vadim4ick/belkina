import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Post } from '@/payload-types'
import { gql } from '@/shared/graphql/client'
import RichText from '@/shared/ui/rich-text'
import { Typography } from '@/shared/ui/typography'
import { Container } from '@/shared/ui/container'

// import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
// import { PayloadRedirects } from '@/components/PayloadRedirects'
// import { PostHero } from '@/heros/PostHero'
// import { generateMeta } from '@/utilities/generateMeta'
// import PageClient from './page.client'
// import { LivePreviewListener } from '@/components/LivePreviewListener'

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
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/posts/' + slug

  // const { Posts } = await gql.GetPostBySlug({ slug })
  const [res] = await Promise.allSettled([gql.GetPostBySlug({ slug })])
  const resVal = res.status === 'fulfilled' ? res.value : null
  if (!resVal) {
    console.error('Ошибка при получении поста:', res)
    return <h1>Пост не найден</h1>
  }
  const { Posts } = resVal
  const post = Posts.docs[0]
  console.log('post ==> ', post)

  return (
    <article className="max-mobile:py-6 py-12">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-12">
          <Typography tag="h2" variant="visuelt-bold-48">
            {post.title}
          </Typography>
          <RichText className="flex flex-col" data={post.content} enableGutter={false} />

          {/* {post.relatedPosts && post.relatedPosts.length > 0 && (
            <RelatedPosts
              className="col-span-3 col-start-1 mt-12 max-w-[52rem] grid-rows-[2fr] lg:grid lg:grid-cols-subgrid"
              docs={post.relatedPosts.filter((post) => typeof post === 'object')}
            />
          )} */}
        </div>
      </Container>
    </article>
  )
}

// export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
//   const { slug = '' } = await paramsPromise
//   const { Posts } = await gql.GetPostBySlug({ slug })

//   return generateMeta({ doc: post })
// }
