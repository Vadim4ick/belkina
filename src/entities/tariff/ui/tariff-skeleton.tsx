'use client'

import { Skeleton } from '@/shared/ui/skeleton'
import { cn } from '@/shared/lib/utils'

const TariffSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'border-light-grey flex flex-col gap-4 rounded-[16px] border bg-white p-4 shadow-lg',
        className,
      )}
    >
      <Skeleton className="h-6 w-1/2" />

      <div className="flex h-full max-h-[356px] flex-col gap-2 overflow-y-auto">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-light-grey flex items-center gap-3 rounded-[6px] px-[10px] py-3"
          >
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>

      <Skeleton className="h-4 w-2/3" />

      <div className="flex w-full flex-col gap-6">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  )
}

export { TariffSkeleton }
