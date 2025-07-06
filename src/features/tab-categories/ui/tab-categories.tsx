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
  value?: number
  name: 'exams' | 'subjects'
  onChange: (name: 'exams' | 'subjects', value: number) => void
}

const TabCategory = memo((props: Props) => {
  const { classNames, btns, isLoading, value, name, onChange } = props

  if (isLoading) {
    return <SkeletonTabCategory count={3} name={name} />
  }

  if (!btns || btns.length === 0) return null

  return (
    <div
      className={cn(
        'flex w-fit flex-wrap items-center gap-[10px] rounded-[16px]',
        name === 'exams' && 'bg-light-grey max-mobile:w-full p-[10px]',
        classNames,
      )}
    >
      {btns.map((btn) => (
        <button
          key={btn.id}
          className={cn(
            name === 'exams'
              ? 'max-mobile:w-full h-[40px] w-[130px] cursor-pointer rounded-[4px] bg-white'
              : 'bg-light-grey cursor-pointer rounded-[8px] px-[20px] py-1.5',
            value === btn.id && (name === 'exams' ? 'bg-black' : 'bg-blue text-white'),
          )}
          onClick={() => onChange(name, btn.id)}
        >
          <Typography
            className={cn(
              'text-black',
              value === btn.id && (name === 'exams' || name === 'subjects' ? 'text-white' : ''),
            )}
            tag="p"
            variant={name === 'exams' ? 'poppins-md-16' : 'poppins-reg-14'}
          >
            {btn.title}
          </Typography>
        </button>
      ))}
    </div>
  )
})

export { TabCategory }
