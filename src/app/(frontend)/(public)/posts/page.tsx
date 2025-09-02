import type { Metadata } from 'next/types'

import React from 'react'
import { notFound } from 'next/navigation'
import { PostListPage } from '@/views/posts'
import { getPosts } from '@/shared/actions/post.action'

export const dynamic = 'force-dynamic'
export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Блог по подготовке к ОГЭ и ЕГЭ по русскому 2025 | Belkina.online',
    description: 'Последние статьи и новости от Belkina.online. ОГЭ и ЕГЭ по Русскому языку.',
    keywords:
      'блог по егэ по русскому, подготовка к огэ по русскому 2025, егэ по русскому 2025, разбор заданий егэ, ошибки в егэ по русскому, как сдать егэ на 90, советы по огэ, belkina online, подготовка к егэ без стресса, статьи по русскому языку, новые правила егэ 2025, практика по егэ, онлайн подготовка к огэ, бесплатные материалы егэ, индивидуальные занятия по русскому',
    alternates: {
      canonical: '/posts',
    },
    openGraph: {
      title: 'Блог по подготовке к ОГЭ и ЕГЭ по русскому 2025 | Belkina.online',
      description:
        'Полезные статьи по подготовке к ОГЭ и ЕГЭ по русскому языку в 2025 году. Разбор заданий, ошибки, советы и обновлённые правила. Узнайте, как сдать экзамен на 90+ без стресса.',
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
