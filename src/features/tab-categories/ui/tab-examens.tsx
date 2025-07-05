'use client'

import { cn } from '@/shared/lib/utils'
import { Typography } from '@/shared/ui/typography'
import { useState } from 'react'

interface Btn {
  title: string
  code: string
}

interface Props {
  classNames?: string
  btns?: Btn[]
  variant?: 'default' | 'secondary'
}

const TabCategory = (props: Props) => {
  const { classNames, btns, variant = 'default' } = props

  const [active, setActive] = useState(btns?.[0].code)

  if (!btns) {
    return null
  }

  return (
    <div
      className={cn(
        'flex w-fit flex-wrap items-center gap-[10px] rounded-[16px]',
        variant === 'default' && 'bg-light-grey p-[10px]',
        classNames,
      )}
    >
      {variant === 'default' &&
        btns.map((btn) => (
          <button
            key={btn.code}
            className={cn(
              'h-[40px] w-[130px] cursor-pointer rounded-[4px] bg-white',
              active === btn.code && 'bg-black',
            )}
            onClick={() => setActive(btn.code)}
          >
            <Typography
              className={cn('text-black', active === btn.code && 'text-white')}
              tag="p"
              variant="poppins-md-16"
            >
              {btn.title}
            </Typography>
          </button>
        ))}

      {variant === 'secondary' &&
        btns.map((btn) => (
          <button
            className={cn(
              'bg-light-grey cursor-pointer rounded-[8px] px-[20px] py-1.5',
              active === btn.code && 'bg-blue text-white',
            )}
            onClick={() => setActive(btn.code)}
            key={btn.code}
          >
            <Typography tag="p" variant="poppins-reg-14">
              {btn.title}
            </Typography>
          </button>
        ))}
    </div>
  )
}

export { TabCategory }
