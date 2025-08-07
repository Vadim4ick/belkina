'use client'

import { useGetWebinarPayment } from '@/shared/services/webinar.service'
import { Button } from '@/shared/ui/button'

const PaymentBtn = ({ webinarId }: { webinarId: number }) => {
  const handleClick = () => {
    console.log('click')
  }

  const { data: webinar, isLoading, isFetching, isFetched } = useGetWebinarPayment({ webinarId })

  // Пока идёт загрузка — ничего не рендерим (в том числе кнопку)
  if (isLoading || isFetching || !isFetched) {
    return null
  }

  // Если уже оплачен — ничего не рендерим
  if (webinar && webinar.WebinarPayments.docs.length) {
    return null
  }

  return <Button onClick={handleClick}>Записаться </Button>
}

export { PaymentBtn }
