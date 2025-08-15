'use client'

import { useProfileStore } from '@/entities/user/use-profile-store'
import { useCreateWebinarPayment } from '@/shared/services/webinar-payments.service'
import { useGetWebinarPayment } from '@/shared/services/webinar.service'
import { Button } from '@/shared/ui/button'
import { toast } from 'sonner'

const PaymentBtn = ({ webinarId, price }: { webinarId: number; price: number }) => {
  const { profile } = useProfileStore()

  const { mutateAsync: createWebinarPayment } = useCreateWebinarPayment({
    webinarId,
    price: price,
    userId: profile?.id ?? 0,
  })

  const handleClick = () => {
    if (!!!profile?.id) {
      return toast.error('Вы не авторизованы. Пожалуйста, авторизуйтесь.')
    }

    if (!profile.isVerified) {
      return toast.error('Вы не подтвердили почту. Пожалуйста, подтвердите свою почту в профиле.')
    }

    createWebinarPayment()
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
