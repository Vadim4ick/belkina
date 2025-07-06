import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { Skeleton } from '@/shared/ui/skeleton'

const SkeletonProductCard = () => {
  return (
    <Card className="flex h-full min-w-[290px] flex-col px-[20px]">
      <div className="relative h-[275px] w-full">
        <Skeleton className="absolute inset-0 h-full w-full rounded-lg" />
      </div>

      <CardHeader className="px-0">
        <Skeleton className="h-6 w-3/4 rounded-md" />
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4 px-0">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-5 w-24 rounded" />

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-5 w-16 rounded" />
            ))}
          </div>
        </div>

        <Skeleton className="h-5 w-20 rounded" />

        <Skeleton className="h-4 w-full rounded" />
      </CardContent>

      <CardFooter className="flex-col gap-4 px-0">
        <div className="flex w-full gap-4">
          <Skeleton className="h-6 w-24 rounded" />
          <Skeleton className="h-6 w-10 rounded" />
        </div>

        <Skeleton className="h-11 w-full rounded" />
      </CardFooter>
    </Card>
  )
}

export { SkeletonProductCard }
