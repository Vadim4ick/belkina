import { TariffList } from '@/features/tariff-list'
import { GetTaraffisQuery } from '@/shared/graphql/__generated__'

const TariffsPage = ({ tariffs }: { tariffs: GetTaraffisQuery['Tariffs']['docs'] }) => {
  return <TariffList tarrifs={tariffs} />
}

export { TariffsPage }
