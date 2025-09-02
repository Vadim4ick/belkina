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
    title:
      pageNum > 1
        ? `Блог по подготовке к ОГЭ и ЕГЭ по русскому 2025 - Страница ${pageNum}`
        : 'Belkina.online',
    description:
      'Полезные статьи по подготовке к ОГЭ и ЕГЭ по русскому языку в 2025 году. Разбор заданий, ошибки, советы и обновлённые правила. Узнайте, как сдать экзамен на 90+ без стресса',
    keywords:
      'блог по егэ по русскому, подготовка к огэ по русскому 2025, егэ по русскому 2025, разбор заданий егэ, ошибки в егэ по русскому, как сдать егэ на 90, советы по огэ, belkina online, подготовка к егэ без стресса, статьи по русскому языку, новые правила егэ 2025, практика по егэ, онлайн подготовка к огэ, бесплатные материалы егэ, индивидуальные занятия по русскому',
    alternates: {
      canonical: pageNum > 1 ? undefined : '/posts',
    },
    openGraph: {
      title:
        pageNum > 1
          ? `Блог по подготовке к ОГЭ и ЕГЭ по русскому 2025 - Страница ${pageNum}`
          : 'Belkina.online',
      description:
        'Полезные статьи по подготовке к ОГЭ и ЕГЭ по русскому языку в 2025 году. Разбор заданий, ошибки, советы и обновлённые правила. Узнайте, как сдать экзамен на 90+ без стресса',
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
