import { Skeleton } from '@/shared/ui/skeleton'
import { Typography } from '@/shared/ui/typography'

export const SkeletonTestCard = () => {
  return (
    <div className="relative w-full">
      {/* Бэкграунд с наклоном */}
      <div className="max-mobile:hidden absolute top-0 right-0 bottom-0 left-0 z-0 h-full rotate-[3deg] rounded-[20px] bg-[#CDCDCD]" />

      {/* Основной блок */}
      <div className="max-tablet:px-3 max-tablet:py-4 relative z-10 rounded-[20px] bg-white px-9 py-6 shadow-lg">
        {/* Заголовок теста */}
        <Typography tag="p" variant="visuelt-bold-32" className="max-tablet:text-[26px]">
          Загрузка...
        </Typography>

        {/* Прогресс бар */}
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div className="bg-primary-default h-full w-[60%] animate-pulse rounded-full"></div>
        </div>

        {/* Информация о вопросе */}
        <div className="mt-6 flex flex-col gap-4">
          {/* Номер вопроса */}
          <div className="flex items-center gap-4">
            <div className="bg-green w-fit rounded-[12px] px-4 py-3 uppercase">
              <Skeleton className="h-5 w-8 bg-gray-300" />
            </div>
            <Skeleton className="h-6 w-72 bg-gray-300" />
          </div>

          {/* Текст вопроса */}
          <Skeleton className="h-6 w-full bg-gray-200" />
          <Skeleton className="h-6 w-4/5 bg-gray-200" />

          {/* Блок с вариантами ответов */}
          <div className="mt-4 space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Skeleton className="h-5 w-5 rounded-full border border-gray-300" />
                <Skeleton className="h-5 w-40 bg-gray-200" />
              </div>
            ))}
          </div>

          {/* Matching тип вопроса (если нужен специальный стиль) */}
          <div className="mt-6 hidden flex-col gap-4 md:flex">
            <div className="grid grid-cols-2 gap-4 rounded-md bg-gray-100 p-4">
              <div className="flex flex-col gap-2">
                <Skeleton className="h-5 w-20 bg-gray-300" />
                {[1, 2, 3].map((item) => (
                  <Skeleton key={item} className="h-6 w-full bg-gray-200" />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-5 w-20 bg-gray-300" />
                {[1, 2, 3].map((item) => (
                  <Skeleton key={item} className="h-6 w-full bg-gray-200" />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-20 bg-gray-300" />
              <Skeleton className="h-10 w-40 bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Кнопки */}
        <div className="mt-6 flex justify-between">
          <Skeleton className="hidden h-10 w-20 rounded-lg bg-gray-200 md:block" />
          <Skeleton className="ml-auto h-12 w-40 rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  )
}
