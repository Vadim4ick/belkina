'use client'

import { GetWebinarsBySlugQuery } from '@/shared/graphql/__generated__'
import { Container } from '@/shared/ui/container'
import RichText from '@/shared/ui/rich-text'
import { Typography } from '@/shared/ui/typography'
import { PaymentBtn } from './payment-btn'
import { UrlWebinar } from './url-webinar'
import { Button } from '@/shared/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getMoscowNow } from '@/shared/lib/utils'
import { formatInTimeZone } from 'date-fns-tz'
import { useProfile } from '@/shared/hooks/use-profile'
import { AdminTablePayments } from './admin-table-payments'

const WebinarsBySlugPage = ({
  webinar,
  count,
}: {
  webinar: GetWebinarsBySlugQuery['Webinars']['docs'][0]
  count: number
}) => {
  const router = useRouter()
  const { profile } = useProfile()

  const nowMsk = getMoscowNow()

  const webinarEnded = webinar.endAt
    ? new Date(webinar.endAt) < nowMsk
    : new Date(webinar.startsAt) < nowMsk

  const startMsk = formatInTimeZone(new Date(webinar.startsAt), 'Europe/Moscow', 'dd.MM.yyyy HH:mm')

  return (
    <section className="mt-12">
      <Container className="max-mobile:pb-6 flex flex-col gap-6 pb-12">
        <Button
          variant="outline"
          onClick={() => router.back()} // Используем router.back() для возврата
          className="flex w-fit items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Назад</span>
        </Button>

        <div className="flex flex-col gap-2">
          <Typography tag="h1" variant="visuelt-bold-48">
            Вебинар - {webinar.title}
          </Typography>

          <Typography tag="p" variant="poppins-md-16">
            Начало вебинара: <b>{startMsk}</b> (по МСК)
          </Typography>
        </div>

        <RichText
          className="mx-[initial] flex flex-col"
          data={webinar.content}
          enableGutter={false}
        />

        {Boolean(webinar?.price) && (
          <div className="flex flex-col gap-2">
            <Typography tag="p" variant="poppins-md-16">
              💳 Стоимость участия: <b> {webinar.price} ₽ / вебинар</b>
            </Typography>

            <Typography tag="p" variant="poppins-md-16">
              💡 Оплата производится только за выбранное занятие. Без абонементов: оплатили —
              участвуете.
            </Typography>

            <Typography tag="p" variant="poppins-md-16">
              📍 После оплаты ссылка на вебинар придёт на ваш email и сразу появится на этой
              странице.
            </Typography>

            <Typography tag="p" variant="poppins-md-16">
              ✉️ Обратите внимание: иногда письмо может попасть в папку <b>«Спам»</b> , проверьте
              папку тоже.
            </Typography>

            <Typography tag="p" variant="poppins-md-16">
              📝 Остались вопросы? Напишите нам в Telegram —{' '}
              <a href="https://t.me/Belkina_online2025">@Belkina_online2025</a>
            </Typography>
          </div>
        )}

        {!webinarEnded && Boolean(webinar?.maxParticipants) && webinar.type === 'minigroup' && (
          <div className="flex flex-col gap-2">
            {count < webinar.maxParticipants ? (
              <Typography tag="p" variant="poppins-md-16">
                <b>
                  🟠 Осталось свободных мест: {webinar.maxParticipants - count} из{' '}
                  {webinar.maxParticipants}
                </b>
              </Typography>
            ) : (
              <Typography tag="p" variant="poppins-md-16">
                <b>🟠 Все места заняты. Набор группы закрыт.</b>
              </Typography>
            )}

            <Typography tag="p" variant="poppins-md-16">
              Группы формируются вручную, чтобы сохранить динамику и внимание к каждому ученику.
              Когда места заканчиваются — набор закрывается.
            </Typography>
          </div>
        )}

        <UrlWebinar webinarId={webinar.id} webinarUrl={webinar?.url} />

        {/* если вебинар уже прошёл */}
        {webinarEnded && (
          <div className="rounded-lg bg-gray-100 p-4 text-center">
            <Typography tag="p" variant="poppins-md-16" className="text-gray-600">
              ❌ К сожалению, этот вебинар уже прошёл. Следите за расписанием новых занятий на нашем
              сайте!
            </Typography>
          </div>
        )}

        {/* кнопка только если можно оплатить */}
        {!webinarEnded &&
          (webinar.type !== 'minigroup' ||
            (webinar.maxParticipants && count < webinar.maxParticipants)) &&
          Boolean(webinar?.price) && (
            <div className="flex max-w-[300px] flex-col gap-4">
              <PaymentBtn webinarId={webinar.id} webinarSlug={webinar.slug} />
            </div>
          )}

        {profile?.role === 'admin' && <AdminTablePayments webinarId={webinar.id} />}
      </Container>
    </section>
  )
}

export { WebinarsBySlugPage }
