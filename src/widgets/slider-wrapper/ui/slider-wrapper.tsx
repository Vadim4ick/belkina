import { GetPostListQuery } from '@/shared/graphql/__generated__'
import { getRoutePosts } from '@/shared/lib/routes'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel'
import { Container } from '@/shared/ui/container'
import { ProductCard } from '@/widgets/product-card'

export type Props = {
  posts: GetPostListQuery['Posts']
}

const SliderWrapper: React.FC<Props> = ({ posts }: Props) => {
  return (
    <section className="py-12">
      <Container className="px-0">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="mx-auto w-[93%]"
        >
          <CarouselContent>
            {posts &&
              posts.docs?.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-3">
                    <ProductCard
                      title={product.title}
                      image={product.image}
                      url={`${getRoutePosts()}/${product.slug}`}
                      showFooter={false}
                    />
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="bg-accent" />
          <CarouselNext className="bg-accent" />
        </Carousel>
      </Container>
    </section>
  )
}

export { SliderWrapper }
