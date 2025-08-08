'use client'

import { useGetWebinarPayment } from '@/shared/services/webinar.service'
import { Typography } from '@/shared/ui/typography'

const UrlWebinar = ({ webinarId, webinarUrl }: { webinarId: number; webinarUrl?: string }) => {
  const { data: webinar, isFetched } = useGetWebinarPayment({ webinarId })

  // Если есть явный URL — показываем сразу
  if (webinarUrl) {
    return (
      <div className="flex w-fit flex-col gap-2 rounded-lg border border-green-500 bg-green-50 p-4">
        <Typography tag="p" variant="poppins-md-16">
          📺 Ссылка на вебинар:
          <a
            href={webinarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 font-semibold text-blue-600 underline hover:text-blue-800"
          >
            перейти →
          </a>
        </Typography>
      </div>
    )
  }

  if (!isFetched || !webinar?.WebinarPayments?.docs?.length) {
    return null
  }

  const fallbackUrl = webinar.WebinarPayments.docs[0]?.webinar?.url

  if (!fallbackUrl) return null

  return (
    <div className="flex w-fit flex-col gap-2 rounded-lg border border-green-500 bg-green-50 p-4">
      <Typography tag="p" variant="poppins-md-16">
        📺 Ссылка на вебинар:
        <a
          href={fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 font-semibold text-blue-600 underline hover:text-blue-800"
        >
          перейти →
        </a>
      </Typography>
    </div>
  )
}

export { UrlWebinar }
