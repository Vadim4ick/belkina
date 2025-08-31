'use client'

import { getRouteWebinars, getRouteWebinarsBySlug } from '@/shared/lib/routes'
import { useGetWebinarPaymentByUser } from '@/shared/services/webinar-payments.service'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import Link from 'next/link'
import { CalendarDays, ExternalLink } from 'lucide-react'
import { getMoscowNow } from '@/shared/lib/utils'

const ProfilePayments = () => {
  const { data } = useGetWebinarPaymentByUser()

  if (!data?.WebinarPayments?.docs?.length) {
    return (
      <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">История покупок</h2>
        <p className="mb-4 text-gray-500">У вас пока нет оплаченных вебинаров</p>

        <Link
          href={getRouteWebinars()}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Перейти к вебинарам
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">История покупок</h2>
      <ul className="space-y-4">
        {data.WebinarPayments.docs.map(({ webinar }) => {
          const date = format(new Date(webinar.startsAt), 'd MMMM yyyy, HH:mm', { locale: ru })

          const nowMsk = getMoscowNow()

          const webinarEnded = webinar.endAt
            ? new Date(webinar.endAt) < nowMsk
            : new Date(webinar.startsAt) < nowMsk

          return (
            <li
              key={webinar.id}
              className="flex flex-col gap-4 rounded-lg border p-5 transition hover:shadow-md md:flex-row md:items-center md:justify-between"
            >
              {/* Левая часть */}
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-1 h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{webinar.title}</h3>
                  <p className="text-gray-600">{date}</p>
                </div>
              </div>

              {/* Правая часть — кнопки */}
              <div className="flex flex-col gap-2 md:flex-row">
                {!webinarEnded && (
                  <>
                    <Link
                      href={getRouteWebinarsBySlug({ slug: webinar.slug })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      Страница вебинара
                    </Link>

                    <a
                      href={webinar.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ссылка на вебинар
                    </a>
                  </>
                )}

                {webinarEnded && webinar.urlRecord && (
                  <a
                    href={webinar.urlRecord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ссылка на запись вебинара
                  </a>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { ProfilePayments }
