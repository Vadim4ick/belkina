import { TariffList } from '@/features/tariff-list'
import { getServerGqlClient } from '@/shared/graphql/client'
import { CoursesList } from './courses-list'

const CoursesPage = async () => {
  const gql = await getServerGqlClient()

  const tarrifs = await gql.GetTaraffis()

  return (
    <>
      <CoursesList />

      <TariffList tarrifs={tarrifs?.Tariffs.docs} />
    </>
  )
}

export { CoursesPage }
