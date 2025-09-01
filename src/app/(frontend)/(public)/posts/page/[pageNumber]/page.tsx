import type { Metadata } from 'next/types'

import React from 'react'
import { notFound } from 'next/navigation'
import { PostListPage } from '@/views/posts'
import { getPostsByPage } from '@/shared/actions/post.action'

export const dynamic = 'force-static'
export const revalidate = 60

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  const pageNum = parseInt(pageNumber) || 1

  return {
    title: pageNum > 1 ? `Блог Belkina.online - Страница ${pageNum}` : 'Блог Belkina.online',
    description: 'Последние статьи и новости от Belkina.online. ОГЭ и ЕГЭ по Русскому языку.',
    keywords: 'Огэ Егэ по русскому языку новости',
    alternates: {
      canonical: pageNum > 1 ? undefined : '/posts',
    },
    openGraph: {
      title: pageNum > 1 ? `Блог Belkina.online - Страница ${pageNum}` : 'Блог Belkina.online',
      description: 'Последние статьи и новости от Belkina.online. ОГЭ и ЕГЭ по Русскому языку.',
      url: pageNum > 1 ? `/posts/page/${pageNum}` : '/posts',
    },
    robots: {
      index: pageNum === 1, // Индексировать только первую страницу
      follow: true,
    },
  }
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise

  const res = await getPostsByPage({ page: parseInt(pageNumber) })

  if (!res || !res.Posts) {
    return notFound()
  }

  return <PostListPage posts={res.Posts} />
}
