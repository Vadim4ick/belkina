import { GetPostListQuery } from '@/shared/graphql/__generated__'
import { getRoutePostsBySlug } from '@/shared/lib/routes'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel'
import { Container } from '@/shared/ui/container'
import { Typography } from '@/shared/ui/typography'
import { ProductCard } from '@/widgets/product-card'

export type Props = {
  posts: GetPostListQuery['Posts']
}

const SliderWrapper: React.FC<Props> = ({ posts }: Props) => {
  return (
    <section className="py-12">
      <Container className="px-0">
        <Typography className="mb-10 text-center" tag="h2" variant="visuelt-bold-48">
          Новости
        </Typography>

        <Carousel
          opts={{
            align: 'start',
          }}
          className="mx-auto w-[93%]"
        >
          <CarouselContent>
            {posts &&
              posts.docs?.map((product) => {
                return (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-3">
                      <ProductCard
                        title={product.title}
                        description={product?.description ?? ''}
                        image={product.image}
                        showFooter={false}
                        url={getRoutePostsBySlug(product.slug)}
                      />
                    </div>
                  </CarouselItem>
                )
              })}
          </CarouselContent>

          {/* ЛЕВАЯ */}
          <CarouselPrevious className="bg-accent max-tablet:-left-0 max-tablet:-top-6" />

          {/* ПРАВАЯ */}
          <CarouselNext className="bg-accent max-tablet:-right-0 max-tablet:-top-6" />
        </Carousel>
      </Container>
    </section>
  )
}

export { SliderWrapper }
