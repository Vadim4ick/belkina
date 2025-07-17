import { TariffCard, TariffSkeleton } from '@/entities/tariff'
import { GetTaraffisQuery } from '@/shared/graphql/client'

const TariffList = ({
  tarrifs,
  isLoading,
}: {
  tarrifs?: GetTaraffisQuery['Tariffs']['docs']
  isLoading?: boolean
}) => {
  if (isLoading) {
    return (
      <div className="max-tablet:flex-col max-mobile:gap-4 flex gap-6">
        {Array.from({ length: 2 }).map((_, idx) => (
          <TariffSkeleton className="w-full" key={idx} />
        ))}
      </div>
    )
  }

  return (
    <div className="max-tablet:flex-col max-mobile:gap-4 flex gap-6">
      {tarrifs?.map((item, idx) => (
        <TariffCard className="w-full" key={idx} item={item} />
      ))}
    </div>
  )
}

export { TariffList }
