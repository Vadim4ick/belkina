import { Skeleton } from '@/shared/ui/skeleton'

const TestsListSkeleton = ({ count = 3 }: { count?: number }) => {
  return (
    <section className="py-6">
      <div className="border-light-grey flex flex-col gap-3 rounded-xl py-6 md:py-5">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="max-tablet:flex-col border-light-grey flex items-center justify-between gap-3 rounded-[6px] border-b-2 bg-white px-2.5 py-3"
          >
            <div className="w-1/3 lg:col-span-4">
              <Skeleton className="h-4 w-full rounded" />
            </div>

            <div className="w-1/3 lg:col-span-2 lg:col-start-5">
              <Skeleton className="h-4 w-full rounded" />
            </div>

            <div className="w-[200px] justify-self-end lg:col-span-2 lg:col-start-7">
              <Skeleton className="h-10 w-full rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { TestsListSkeleton }
