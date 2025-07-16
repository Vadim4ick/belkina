'use client'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'

const ProductCardBtn = ({
  btnText,
  btnDisabled,
  url,

  courseTariffId,
  courseFree,
}: {
  btnText: string
  btnDisabled: boolean
  url: string
  courseTariffId?: number
  courseFree?: boolean
}) => {
  const showButton = !!courseTariffId || courseFree

  if (!showButton) {
    return null
  }

  return (
    <Link
      href={btnDisabled ? '#' : url}
      className={cn('w-full', btnDisabled && 'pointer-events-none')}
    >
      <Button disabled={btnDisabled} className="w-full">
        {btnText}
      </Button>
    </Link>
  )
}

export { ProductCardBtn }
