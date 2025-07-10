import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'
import type { Post } from '@/payload-types'

/* ---------- /posts/[slug] ---------- */

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (context.disableRevalidate) return doc

  if (doc._status === 'published') {
    revalidatePath(`/posts/${doc.slug}`)
    revalidateTag('posts-sitemap')
    payload.logger.info(`Revalidated post /posts/${doc.slug}`)
  }

  if (previousDoc?._status === 'published' && doc._status !== 'published') {
    revalidatePath(`/posts/${previousDoc.slug}`)
    revalidateTag('posts-sitemap')
    payload.logger.info(`Revalidated old post /posts/${previousDoc.slug}`)
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = ({ doc, req: { context } }) => {
  if (context.disableRevalidate) return doc

  revalidatePath(`/posts/${doc.slug}`)
  revalidateTag('posts-sitemap')
  return doc
}

/* ---------- /posts (листинг) ---------- */

export const revalidatePostsList: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { context },
}) => {
  if (context.disableRevalidate) return doc

  const becamePublished = doc._status === 'published' && previousDoc?._status !== 'published'

  const unpublished = previousDoc?._status === 'published' && doc._status !== 'published'

  const publishedSlugChanged =
    doc._status === 'published' &&
    previousDoc?._status === 'published' &&
    doc.slug !== previousDoc.slug

  if (becamePublished || unpublished || publishedSlugChanged) {
    revalidatePath('/posts')
    revalidateTag('posts-list')
  }

  return doc
}

export const revalidatePostsListDelete: CollectionAfterDeleteHook<Post> = ({
  req: { context },
}) => {
  if (context.disableRevalidate) return

  revalidatePath('/posts')
  revalidateTag('posts-list')
}
