'use client'
import { cn } from '@/shared//lib/utils'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/widgets/Media'
import { Typography } from '@/shared/ui/typography'

export type CardPostData = Pick<Post, 'slug' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts' | 'poducts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <Link className="not-prose line-clamp-2" href={href}>
      <article
        className={cn(
          'border-border bg-card flex flex-col overflow-hidden rounded-lg border hover:cursor-pointer',
          className,
        )}
      >
        <div className="bg-accent-foreground relative h-1/2 w-full overflow-hidden">
          {!metaImage && <div className="">No image</div>}
          {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
        </div>
        <div className="flex h-1/2 flex-col gap-y-5 p-4">
          {/* {showCategories && hasCategories && (
          <div className="mb-4 text-sm uppercase">
            {showCategories && hasCategories && (
              <div>
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category

                    const categoryTitle = titleFromCategory || 'Untitled category'

                    const isLast = index === categories.length - 1

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  }

                  return null
                })}
              </div>
            )}
          </div>
        )} */}
          {titleToUse && (
            <div className="min-h-16">
              <Typography tag="h3" variant="poppins-md-16">
                {titleToUse}
              </Typography>
            </div>
          )}
          {description && (
            <div className="line-clamp-5 grow">
              <Typography tag="p" variant="poppins-md-16">
                {description}
              </Typography>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
