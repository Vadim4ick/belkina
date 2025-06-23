'use client'

import { Button } from '@/shared/ui/button'
import { memo } from 'react'

const TariffButton = memo(({ isCurrentTariff }: { isCurrentTariff: boolean }) => {
  return (
    <Button
      disabled={isCurrentTariff}
      variant={isCurrentTariff ? 'primary-inverted' : 'primary'}
      size={'xl'}
    >
      {isCurrentTariff ? 'Текущий' : 'Подключить'}
    </Button>
  )
})

export { TariffButton }
