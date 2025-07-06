'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/shared/lib/utils'
import { Typography } from './typography'

type Props = {
  value: number
} & React.ComponentProps<typeof ProgressPrimitive.Root>

function Progress({ className, value = 0, ...props }: Props) {
  const clampedValue = Math.min(Math.max(value, 0), 100)
  const percentage = Math.round(clampedValue)

  return (
    <div className="flex w-full flex-col items-end gap-1">
      <Typography tag="span" className="text-dark-grey text-[12px]" variant="poppins-reg-14">
        {percentage}%
      </Typography>

      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          'bg-light-grey relative h-1.5 w-full overflow-hidden rounded-full',
          className,
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-blue h-full transition-all"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  )
}

export { Progress }
