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
import { ClockIcon } from '@/shared/icons/clock'

export interface ProductCardProps {
  title: string
  categories: string[]
  duration: string
  description: string
  price: number
  discount: number
  image: string
}

const ProductCard = ({
  title,
  categories,
  duration,
  description,
  price,
  discount,
  image,
}: ProductCardProps) => {
  return (
    <Card className="flex h-full min-w-[290px] flex-col">
      <CardContent>
        <Image
          src={image}
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
        <div className="flex gap-4">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="px-2.5">
              <Typography variant="poppins-reg-14">{category}</Typography>
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <Typography variant="poppins-reg-14">Длительность</Typography>
          <Badge className="bg-blue gap-2 px-2.5">
            <span>
              <ClockIcon className="h-3.5" />
            </span>{' '}
            {duration}
          </Badge>
        </div>
        <CardDescription>
          <Typography variant="poppins-reg-14" className="line-clamp-2">
            {description}
          </Typography>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div className="flex w-full gap-4">
          <Typography variant="poppins-md-24">
            {price > 0 ? `${price.toLocaleString()}₽` : 'Бесплатно'}
          </Typography>
          {price > 0 && discount > 0 ? (
            <Badge variant="destructive" className="px-2.5">
              <Typography variant="poppins-md-16">- {discount}%</Typography>
            </Badge>
          ) : null}
        </div>
        <Button className="w-full">Приобрести</Button>
      </CardFooter>
    </Card>
  )
}

export { ProductCard }
