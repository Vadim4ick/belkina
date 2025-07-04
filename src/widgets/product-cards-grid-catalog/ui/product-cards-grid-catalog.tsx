import { cn } from '@/shared/lib/utils'
import { Typography } from '@/shared/ui/typography'

interface ProductCardsGridCatalogProps {
  title?: string
  children?: React.ReactNode
  className?: string
  isNull?: boolean
}

const ProductCardsGridCatalog = ({
  title,
  children,
  className,
  isNull,
}: ProductCardsGridCatalogProps) => {
  return (
    <section className={cn('py-8 antialiased md:py-12', className)}>
      <div className="mx-auto flex flex-col gap-4 2xl:px-0">
        <div className="items-end justify-between space-y-4 sm:flex sm:space-y-0">
          <Typography tag="h2" variant="poppins-md-24">
            {title}
          </Typography>
        </div>

        <div
          className={cn('mb-4 grid gap-6 md:mb-8', {
            'grid-cols-1': isNull,
            'md:grid-cols-2 xl:grid-cols-3': !isNull,
          })}
        >
          {children}
        </div>

        {/* ToDO: Реализовать логику показать еще */}
        {/* <div className="w-full text-center">
          <button
            type="button"
            className="hover:text-primary-700 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Показать еще
          </button>
        </div> */}
      </div>
    </section>
  )
}

export { ProductCardsGridCatalog }
