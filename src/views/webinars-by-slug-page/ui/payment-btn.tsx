'use client'

import { Button } from '@/shared/ui/button'

const PaymentBtn = () => {
  const handleClick = () => {
    console.log('click')
  }

  return <Button onClick={handleClick}>Записаться и оплатить</Button>
}

export { PaymentBtn }
