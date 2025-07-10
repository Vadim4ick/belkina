import type { Metadata } from 'next/types'

import React from 'react'
import { notFound } from 'next/navigation'
import { createGqlClient } from '@/shared/graphql/client'
import { PostListPage } from '@/views/posts'

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
  const gql = createGqlClient({
    tags: ['posts-list'],
  })

  const res = await gql.GetPostList({ limit: 3, page: 1 })

  if (!res) {
    return notFound()
  }

  return <PostListPage posts={res.Posts} />
}
