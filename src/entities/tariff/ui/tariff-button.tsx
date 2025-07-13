'use client'

import { useProfileStore } from '@/entities/user/use-profile-store'
import { Button } from '@/shared/ui/button'
import { memo } from 'react'

const TariffButton = memo(({ id }: { id: number }) => {
  const { profile } = useProfileStore()

  const isCurrentTariff = profile?.tariff?.id === id

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
