'use client'

import { useProfileStore } from '@/entities/user/use-profile-store'
import { useGetWebinarPayment } from '@/shared/services/webinar.service'
import { Button } from '@/shared/ui/button'
import { toast } from 'sonner'

const PaymentBtn = ({ webinarId }: { webinarId: number }) => {
  const { profile } = useProfileStore()

  const handleClick = () => {
    if (!!!profile?.id) {
      return toast.error('Вы не авторизованы. Пожалуйста, авторизуйтесь.')
    }

    if (!profile.isVerified) {
      return toast.error('Вы не подтвердили почту. Пожалуйста, подтвердите свою почту в профиле.')
    }

    console.log('click')
  }

  const { data: webinar, isLoading, isFetching } = useGetWebinarPayment({ webinarId })

  // Пока идёт загрузка — ничего не рендерим (в том числе кнопку)
  if (isLoading || isFetching) {
    return null
  }

  // Если уже оплачен — ничего не рендерим
  if (webinar && webinar.WebinarPayments.docs.length) {
    return null
  }

  return <Button onClick={handleClick}>Записаться </Button>
}

export { PaymentBtn }
