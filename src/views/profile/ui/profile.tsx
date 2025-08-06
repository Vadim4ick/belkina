import { TestsHistory } from '@/widgets/tests-history'
import { Topic } from './topic'
import { cookies } from 'next/headers'
import { JwtService } from '@/shared/services/jwt-service'
import { getFetchAllTestsIds, getTestHistoryByUserId } from '@/shared/actions/test.action'
import { getRecommendations } from '@/shared/actions/recommendation.action'
import { getSettledValue } from '@/shared/lib/utils'
import { ProfileForm } from './profile-form'
import { ProfileTitle } from './profile-title'
import { Container } from '@/shared/ui/container'

export async function Profile() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  const payload = await JwtService.verifyToken(accessToken)

  const testIds = await getFetchAllTestsIds()

  const [testHistory, recommendations] = await Promise.allSettled([
    getTestHistoryByUserId({
      userId: payload.id,
      testIds: testIds.Tests.docs.map((t) => t.id),
    }),
    getRecommendations({
      userId: payload.id,
    }),
  ])

  const testHistoryVal = getSettledValue(testHistory)
  const recommendationsVal = getSettledValue(recommendations)

  return (
    <section className="max-mobile:py-6 py-12">
      {/* Обертка контейнер использована на время деактивированноо сайдбара. При активации сайдбара контейнер не нужен!!!!!!!! */}
      <Container>
        <div className="flex flex-col gap-4">
          <ProfileTitle />

          <ProfileForm />
        </div>

        {recommendationsVal && recommendationsVal?.GetUserRecommendations?.length > 0 && (
          <Topic recomendations={recommendationsVal.GetUserRecommendations} />
        )}

        {testHistoryVal && <TestsHistory testHistory={testHistoryVal.TestResults.docs} />}

        {/* <ProductCardsGridCatalog title="Бесплатные материалы">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductCardsGridCatalog>
      <ProductCardsGridCatalog title="Каталог">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductCardsGridCatalog> */}
      </Container>
    </section>
  )
}
