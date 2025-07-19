import React from 'react'

import { cn } from '@/shared/lib/utils'
import { GetPostListQuery } from '@/shared/graphql/__generated__'
import { ProductCard } from '../product-card'
import { ProductCardsGridCatalog } from '../product-cards-grid-catalog'

export type Props = {
  posts: GetPostListQuery['Posts']['docs']
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props
  console.log('posts ==> ', posts)

  return (
    <div className={cn('container')}>
      <ProductCardsGridCatalog isNull={posts.length === 0} title="Архив статей">
        {posts &&
          posts?.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              showFooter={false}
              url={`/posts/${product.slug}`}
            />
          ))}
      </ProductCardsGridCatalog>
    </div>
  )
}
