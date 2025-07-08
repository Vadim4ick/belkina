'use client'

import { useRouter } from 'next/navigation'
import { Arrow } from '../icons/arrow'
import { Skeleton } from './skeleton'

export const PaginationSkeleton = () => {
  return (
    <div className="mt-6 flex w-fit items-center gap-1 rounded-[4px] border border-gray-300 px-3 py-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-[32px] w-[32px] rounded-[4px] border border-gray-200" />
      ))}
    </div>
  )
}

type ServerVariant = {
  variant: 'server'
  onPageChange?: never
}

type ClientVariant = {
  variant: 'client'
  onPageChange: (page: number) => void
}

type PaginationProps = {
  page: number
  totalPages: number
  isLoading?: boolean
} & (ServerVariant | ClientVariant)

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
  isLoading,
  variant,
}: {
  page: number
  totalPages: number
  onPageChange?: (page: number) => void
  isLoading?: boolean
  variant: 'client' | 'server'
}) => {
  const router = useRouter()

  const handlePageClick = (pageNum: number) => {
    if (isLoading || pageNum === page || pageNum < 1 || pageNum > totalPages) return

    if (variant === 'server') {
      router.push(`/posts/page/${pageNum}`)
    } else if (variant === 'client' && onPageChange) {
      onPageChange(pageNum)
    }
  }

  const pagesToShow = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    Math.max(0, page - 2),
    page + 1,
  )

  return (
    <div className="flex w-fit items-center rounded-[4px] border border-gray-300">
      <button
        className="cursor-pointer px-3 py-1.5 disabled:opacity-50"
        disabled={page <= 1 || isLoading}
        onClick={() => handlePageClick(page - 1)}
      >
        <Arrow className="text-dark-grey" />
      </button>

      {pagesToShow.map((p) => (
        <button
          disabled={isLoading}
          key={p}
          className={`${
            p === page ? 'bg-black text-white' : 'text-dark-grey'
          } cursor-pointer border-x border-gray-300 px-3 py-1.5 text-[14px] leading-[150%] font-medium`}
          onClick={() => handlePageClick(p)}
        >
          {p}
        </button>
      ))}

      {totalPages > pagesToShow[pagesToShow.length - 1] && (
        <>
          <button
            disabled={true}
            className="text-dark-grey cursor-default border-x border-gray-300 px-3 py-1.5 text-[14px]"
          >
            ...
          </button>
          <button
            disabled={isLoading}
            className="text-dark-grey cursor-pointer border-x border-gray-300 px-3 py-1.5 text-[14px]"
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        className="rotate-180 cursor-pointer px-3 py-1.5 disabled:opacity-50"
        disabled={page >= totalPages || isLoading}
        onClick={() => handlePageClick(page + 1)}
      >
        <Arrow className="text-dark-grey" />
      </button>
    </div>
  )
}

export { Pagination }
