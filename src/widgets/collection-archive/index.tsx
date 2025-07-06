import React from 'react'

import { cn } from '@/shared/lib/utils'
import { Card, CardPostData } from '@/entities/post/ui/post-card'
import { GetPostListQuery } from '@/shared/graphql/__generated__'

export type Props = {
  posts: GetPostListQuery['Posts']['docs']
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 gap-x-4 gap-y-4 sm:grid-cols-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8 xl:gap-x-8">
          {posts?.map((result, index) => {
            console.log('result ==> ', result)
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Card className="h-[400px]" doc={result} relationTo="posts" showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
