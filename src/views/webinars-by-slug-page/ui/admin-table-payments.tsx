import { useGetInfoWebinarPaymentByWebinarId } from '@/shared/services/webinar-payments.service'
import { Typography } from '@/shared/ui/typography'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const AdminTablePayments = ({ webinarId }: { webinarId: number }) => {
  const { data, isLoading } = useGetInfoWebinarPaymentByWebinarId({
    webinarId,
  })

  return (
    <div className="flex flex-col gap-6">
      <Typography tag="p" variant="visuelt-bold-32">
        Пользователи, купившие вебинар
      </Typography>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-5 py-3 font-semibold">Имя</th>
              <th className="px-5 py-3 font-semibold">Email</th>
              <th className="px-5 py-3 font-semibold">Дата оплаты</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan={3} className="px-5 py-6 text-center text-gray-500">
                  Загружаем данные...
                </td>
              </tr>
            ) : data?.WebinarPayments?.docs?.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-5 py-6 text-center text-gray-400">
                  Пока никто не оплатил этот вебинар
                </td>
              </tr>
            ) : (
              data?.WebinarPayments?.docs.map((p) => (
                <tr key={p.id} className="transition even:bg-gray-50 hover:bg-gray-100">
                  <td className="px-5 py-3 font-medium text-gray-900">{p.user?.name || '—'}</td>
                  <td className="px-5 py-3 text-gray-600">{p.user?.email}</td>
                  <td className="px-5 py-3 text-gray-600">
                    {format(new Date(p.createdAt), 'dd.MM.yyyy HH:mm', {
                      locale: ru,
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export { AdminTablePayments }
