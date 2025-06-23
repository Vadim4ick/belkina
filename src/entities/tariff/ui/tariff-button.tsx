'use client'

import { Button } from '@/shared/ui/button'
import { Skeleton } from '@/shared/ui/skeleton'
import { useSession } from 'next-auth/react'

const TariffButton = ({ tariffId }: { tariffId: number }) => {
  const { data: session, status } = useSession()

  if (status == 'loading') {
    return <Skeleton className="h-[48px] w-full" />
  }

  return (
    <Button
      disabled={session?.user.tariffId == tariffId}
      variant={session?.user.tariffId == tariffId ? 'primary-inverted' : 'primary'}
      size={'xl'}
    >
      {session?.user.tariffId == tariffId ? 'Текущий' : 'Подключить'}
    </Button>
  )
}

export { TariffButton }
