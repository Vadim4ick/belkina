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
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

export interface ProductCardProps {
  title: string
  categories: string[]
  duration: string
  description: string
  exams: string
  url: string
  price: number
  discount: number
  image: MediaFragmentFragment

  btnText?: string
  btnDisabled?: boolean
  showFooter?: boolean
}

const ProductCard = ({
  title,
  categories,
  duration,
  description,
  exams,
  price,
  discount,
  url,
  image,
  btnText = 'Подробнее',
  btnDisabled = false,
  showFooter = true,
}: ProductCardProps) => {
  return (
    <Card className="flex h-full min-w-[290px] flex-col px-[20px]">
      <div className="relative h-[275px] w-full">
        <Image
          src={image.url}
          alt="Banner"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      <CardHeader className="px-0">
        <CardTitle className="px-0">
          <Typography variant="poppins-md-16" className="line-clamp-2 uppercase">
            {title}
          </Typography>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4 px-0">
        <div className="flex flex-col gap-4">
          <Badge variant="secondary">
            <Typography variant="poppins-reg-14">{exams}</Typography>
          </Badge>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">
                <Typography variant="poppins-reg-14">{category}</Typography>
              </Badge>
            ))}
          </div>
        </div>

        <Clock duration={duration} />

        {showFooter && (
          <CardDescription>
            <Typography variant="poppins-reg-14" className="line-clamp-2">
              {description}
            </Typography>
          </CardDescription>
        )}
      </CardContent>

      <CardFooter className="flex-col gap-4 px-0">
        {showFooter && (
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
        )}

        <Link
          href={btnDisabled ? '#' : url}
          className={cn('w-full', btnDisabled && 'pointer-events-none')}
        >
          <Button disabled={btnDisabled} className="w-full">
            {btnText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export { ProductCard }
