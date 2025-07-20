import type { Metadata } from 'next/types'

import React from 'react'
import { notFound } from 'next/navigation'
import { PostListPage } from '@/views/posts'
import { getPosts } from '@/shared/actions/post.action'

export const dynamic = 'force-dynamic'
export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Блог Belkina.online',
    description: 'Последние статьи и новости от Belkina.online. ОГЭ и ЕГЭ по Русскому языку.',
    alternates: {
      canonical: '/posts',
    },
    openGraph: {
      title: 'Блог Belkina.online',
      description: 'Последние статьи и новости от Belkina.online. ОГЭ и ЕГЭ по Русскому языку.',
      url: '/posts',
    },
  }
}

export default async function Page() {
  // const gql = createGqlClient({
  //   tags: ['posts-list'],
  // })

  const res = await getPosts()

  if (!res || !res.Posts) {
    return notFound()
  }

  return <PostListPage posts={res.Posts} />
}
