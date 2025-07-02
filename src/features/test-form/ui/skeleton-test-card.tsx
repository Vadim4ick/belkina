import { Skeleton } from '@/shared/ui/skeleton'

export const SkeletonTestCard = () => {
  return (
    <div className="relative w-full animate-pulse">
      <div className="max-mobile:hidden absolute top-0 right-0 bottom-0 left-0 z-0 h-full rotate-[3deg] rounded-[20px] bg-[#E0E0E0]" />

      <div className="max-tablet:px-3 max-tablet:py-4 relative z-10 rounded-[20px] bg-white px-9 py-6 shadow-lg">
        {/* Заголовок */}
        <Skeleton className="mb-6 h-6 w-2/3 rounded" />

        {/* Варианты ответов */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Кнопки */}
        <div className="mt-6 flex justify-between">
          <Skeleton className="h-10 w-24 rounded" />
          <Skeleton className="h-10 w-24 rounded" />
        </div>
      </div>
    </div>
  )
}
