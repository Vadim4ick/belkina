'use client'

import { useProfileStore } from '@/entities/user/use-profile-store'
import { useProfile } from '@/shared/hooks/use-profile'
import { getRouteAuth, getRouteProfile } from '@/shared/lib/routes'
import { useCreateWebinarPayment } from '@/shared/services/webinar-payments.service'
import { useGetWebinarPayment } from '@/shared/services/webinar.service'
import { Button } from '@/shared/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const PaymentBtn = ({ webinarId, webinarSlug }: { webinarId: number; webinarSlug: string }) => {
  const { profile } = useProfileStore()
  const { isLoading: isLoadingProfile } = useProfile()

  const { mutate: createWebinarPayment, isPending: isLoadingPayment } = useCreateWebinarPayment()

  const router = useRouter()

  const handleClick = () => {
    if (!!!profile?.id) {
      router.push(getRouteAuth())
      return toast.error('Вы не авторизованы. Пожалуйста, авторизуйтесь.')
    }

    if (!profile.isVerified || !profile.email) {
      router.push(getRouteProfile())
      return toast.error('Вы не подтвердили почту. Пожалуйста, подтвердите свою почту в профиле.')
    }

    createWebinarPayment({
      webinarId,
      userId: profile.id,
      userEmail: profile.email,
      webinarSlug,
    })
  }

  const { data: webinar, isLoading, isFetching } = useGetWebinarPayment({ webinarId })

  // Пока идёт загрузка — ничего не рендерим (в том числе кнопку)
  if (isLoading || isFetching || isLoadingProfile) {
    return null
  }

  // Если уже оплачен — ничего не рендерим
  if (webinar && webinar.WebinarPayments.docs.length) {
    return null
  }

  return (
    <Button disabled={isLoadingPayment} onClick={handleClick}>
      Записаться{' '}
    </Button>
  )
}

export { PaymentBtn }
