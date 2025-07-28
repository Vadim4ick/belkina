import { Skeleton } from '@/shared/ui/skeleton'

const TestsListSkeleton = ({ count = 4 }: { count?: number }) => {
  return (
    <section className="py-6">
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {Array.from({ length: count }).map((_, idx) => (
          <div key={idx} className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-md">
            {/* Заголовок и статус */}
            <div className="flex items-start justify-between">
              <Skeleton className="h-5 w-1/2 rounded" /> {/* заголовок */}
              <Skeleton className="h-4 w-20 rounded" /> {/* статус */}
            </div>

            {/* Описание */}
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />

            {/* Кнопка */}
            <div className="mt-auto">
              <Skeleton className="h-10 w-full rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { TestsListSkeleton }
