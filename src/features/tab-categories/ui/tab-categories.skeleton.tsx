'use client'

import { cn } from '@/shared/lib/utils'
import { Skeleton } from '@/shared/ui/skeleton'

interface Props {
  classNames?: string
  count?: number
  variant?: 'default' | 'secondary'
}

const SkeletonTabCategory = (props: Props) => {
  const { classNames, count = 3, variant } = props

  return (
    <div
      className={cn(
        'flex w-fit flex-wrap items-center gap-[10px] rounded-[16px]',
        variant === 'default' && 'bg-light-grey p-[10px]',
        classNames,
      )}
    >
      {Array.from({ length: count }).map((_, i) => {
        if (variant === 'default') {
          return <Skeleton key={i} className="h-[40px] w-[130px] rounded-[4px] bg-white" />
        }

        if (variant === 'secondary') {
          return <Skeleton key={i} className="bg-light-grey h-[32px] w-[100px] rounded-[8px]" />
        }

        return null
      })}
    </div>
  )
}

export { SkeletonTabCategory }
