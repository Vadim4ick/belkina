'use client'

import { cn } from '@/shared/lib/utils'
import { Typography } from '@/shared/ui/typography'
import { SkeletonTabCategory } from './tab-categories.skeleton'
import { memo } from 'react'
import { BtnCategory } from '@/entities/courses/types'

interface Props {
  classNames?: string
  btns?: BtnCategory[]
  isLoading?: boolean
  variant?: 'default' | 'secondary'
  value?: number
  onChange: (value: number) => void
}

const TabCategory = memo((props: Props) => {
  const { classNames, btns, isLoading, value, variant = 'default', onChange } = props

  if (isLoading) {
    return <SkeletonTabCategory count={3} variant={variant} />
  }

  if (!btns || btns.length === 0) return null

  return (
    <div
      className={cn(
        'flex w-fit flex-wrap items-center gap-[10px] rounded-[16px]',
        variant === 'default' && 'bg-light-grey max-mobile:w-full p-[10px]',
        classNames,
      )}
    >
      {btns.map((btn) => (
        <button
          key={btn.id}
          className={cn(
            variant === 'default'
              ? 'max-mobile:w-full h-[40px] w-[130px] cursor-pointer rounded-[4px] bg-white'
              : 'bg-light-grey cursor-pointer rounded-[8px] px-[20px] py-1.5',
            value === btn.id && (variant === 'default' ? 'bg-black' : 'bg-blue text-white'),
          )}
          onClick={() => onChange(btn.id)}
        >
          <Typography
            className={cn('text-black', value === btn.id && 'text-white')}
            tag="p"
            variant={variant === 'default' ? 'poppins-md-16' : 'poppins-reg-14'}
          >
            {btn.title}
          </Typography>
        </button>
      ))}
    </div>
  )
})

export { TabCategory }
