'use client'

import { CollectionArchive } from '@/widgets/collection-archive'
import { Typography } from '@/shared/ui/typography'
import { Container } from '@/shared/ui/container'
import { Pagination } from '@/shared/ui/pagination'
import { GetPostListQuery } from '@/shared/graphql/__generated__'
import { EmptyDataMessage } from '@/widgets/widgets/empty-data-message'

const PostListPage = ({ posts }: { posts: GetPostListQuery['Posts'] }) => {
  console.log('posts', posts.docs.length < 1)

  if (posts.docs.length < 1)
    return (
      <section className="max-mobile:py-6 py-12">
        <EmptyDataMessage
          title="Результаты не найдены"
          message="Измените параметры поиска или попробуйте снова."
        />
      </section>
    )

  return (
    <section className="max-mobile:py-6 py-12">
      <Container>
        <Typography tag="h1" variant="visuelt-bold-48" className="mb-6">
          Блог Belkina.online
        </Typography>

        <CollectionArchive posts={posts.docs} />
        <div className="w-full py-8">
          {posts.totalPages > 1 && posts.page && (
            <Pagination page={posts.page} totalPages={posts.totalPages} variant="server" />
          )}
        </div>
      </Container>
    </section>
  )
}

export { PostListPage }
