'use client'

import { Button } from '@/shared/ui/button'
import { memo } from 'react'

const TariffButton = memo(() => {
  const isCurrentTariff = false

  return (
    <Button variant={isCurrentTariff ? 'primary-inverted' : 'primary'} size={'xl'}>
      {isCurrentTariff ? 'Текущий' : 'Подключить'}
    </Button>
  )
})

export { TariffButton }
