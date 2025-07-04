import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Badge } from '@/shared/ui/badge'
import { Typography } from '@/shared/ui/typography'
import { MediaFragmentFragment } from '@/shared/graphql/__generated__'
import { Clock } from '@/shared/ui/clock'

export interface ProductCardProps {
  title: string
  categories: string[]
  duration: string
  description: string
  exams: string
  price: number
  discount: number
  image: MediaFragmentFragment
}

const ProductCard = ({
  title,
  categories,
  duration,
  description,
  exams,
  price,
  discount,
  image,
}: ProductCardProps) => {
  return (
    <Card className="flex h-full min-w-[290px] flex-col">
      <CardContent>
        <Image
          src={image.url}
          alt="Photo by Drew Beamer"
          objectFit="cover"
          width={325}
          height={278}
          className="relative h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </CardContent>
      <CardHeader>
        <CardTitle>
          <Typography variant="poppins-md-16" className="line-clamp-2 uppercase">
            {title}
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Badge variant="secondary" className="px-2.5">
            <Typography variant="poppins-reg-14">{exams}</Typography>
          </Badge>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="px-2.5">
                <Typography variant="poppins-reg-14">{category}</Typography>
              </Badge>
            ))}
          </div>
        </div>

        <Clock duration={duration} />

        <CardDescription>
          <Typography variant="poppins-reg-14" className="line-clamp-2">
            {description}
          </Typography>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <div className="flex w-full gap-4">
          <Typography variant="poppins-md-24">
            {price > 0 ? `${price.toLocaleString()}₽` : 'Бесплатно'}
          </Typography>
          {price > 0 && discount > 0 ? (
            <Badge variant="destructive" className="px-2.5">
              <Typography variant="poppins-md-16">-{discount}%</Typography>
            </Badge>
          ) : null}
        </div>
        <Button className="w-full">Приобрести</Button>
      </CardFooter>
    </Card>
  )
}

export { ProductCard }
