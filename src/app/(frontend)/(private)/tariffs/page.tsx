import { getServerAuthGqlClient } from '@/shared/graphql/client'
import { TariffsPage } from '@/views/tariffs'

export const revalidate = 180

export default async function Page() {
  const gql = await getServerAuthGqlClient({})

  const tariffs = await gql.GetTaraffis()

  return <TariffsPage tariffs={tariffs?.Tariffs.docs} />
}
