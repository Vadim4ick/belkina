import { GetWebinarsBySlugQuery } from '@/shared/graphql/__generated__'
import { Container } from '@/shared/ui/container'
import RichText from '@/shared/ui/rich-text'
import { Typography } from '@/shared/ui/typography'
import { PaymentBtn } from './payment-btn'
import { UrlWebinar } from './url-webinar'

const WebinarsBySlugPage = ({
  webinar,
  count,
}: {
  webinar: GetWebinarsBySlugQuery['Webinars']['docs'][0]
  count: number
}) => {
  return (
    <section className="mt-12">
      <Container className="max-mobile:pb-6 flex flex-col gap-6 pb-12">
        <Typography tag="h1" variant="visuelt-bold-48">
          Вебинар - {webinar.title}
        </Typography>

        <RichText
          className="mx-[initial] flex flex-col"
          data={webinar.content}
          enableGutter={false}
        />

        {Boolean(webinar?.price) && (
          <div className="flex flex-col gap-2">
            <Typography tag="p" variant="poppins-md-16">
              💳 Стоимость участия: <b> {webinar.price} ₽ / занятие</b>
            </Typography>

            <Typography tag="p" variant="poppins-md-16">
              💡 Оплата — за занятие, без абонементов. Оплачиваете — участвуете.
            </Typography>

            <Typography tag="p" variant="poppins-md-16">
              📍 Ссылка на занятие придёт на ваш email и также отобразится на этой странице сразу
              после оплаты.
            </Typography>
          </div>
        )}

        {Boolean(webinar?.maxParticipants) && webinar.type === 'minigroup' && (
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

        {/* кнопка только если можно оплатить */}
        {(webinar.type !== 'minigroup' ||
          (webinar.maxParticipants && count < webinar.maxParticipants)) &&
          Boolean(webinar?.price) && (
            <div className="flex max-w-[300px] flex-col gap-4">
              <PaymentBtn webinarId={webinar.id} webinarSlug={webinar.slug} />
            </div>
          )}
      </Container>
    </section>
  )
}

export { WebinarsBySlugPage }
