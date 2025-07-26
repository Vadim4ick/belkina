import { TestsHistory } from '@/widgets/tests-history'
import { Topic } from './topic'
import { cookies } from 'next/headers'
import { JwtService } from '@/shared/services/jwt-service'
import { getTestHistoryByUserId } from '@/shared/actions/test.action'
import { getRecommendations } from '@/shared/actions/recommendation.action'
import { getSettledValue } from '@/shared/lib/utils'
import { getPurchasesCourses } from '@/shared/actions/purchases.action'
import { ProfileForm } from './profile-form'
import { ProfileTitle } from './profile-title'

// const mockProducts = [
//   {
//     id: '1',
//     title: 'Информационная обработка письменных текстов',
//     categories: ['Математика'],
//     exams: 'ЕГЭ',
//     duration: '11:30:20',
//     description:
//       'В этом материале будут основные правила по русскому языку, которые пригодятся на ЕГЭ',
//     price: 3790,
//     discount: 10,
//     image: {
//       id: 1,
//       url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
//       alt: 'alt',
//     },
//   },
//   {
//     id: '2',
//     title: 'Физика: Разбор задач на кинематику',
//     categories: ['Математика'],
//     exams: 'ЕГЭ',
//     duration: '05:12:00',
//     description:
//       'Подробный разбор задач на движение тел. Подходит для подготовки к ОГЭ и олимпиадам.',
//     price: 0,
//     discount: 0,
//     image: {
//       id: 1,
//       url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
//       alt: 'alt',
//     },
//   },
//   {
//     id: '3',
//     title: 'Математика: Производные и интегралы',
//     categories: ['Математика'],
//     exams: 'ЕГЭ',
//     duration: '08:45:10',
//     description: 'Разбор тем по высшей математике для студентов и старшеклассников.',
//     price: 2990,
//     discount: 15,
//     image: {
//       id: 1,
//       url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
//       alt: 'alt',
//     },
//   },
//   {
//     id: '4',
//     title: 'История России: XX век',
//     categories: ['Математика'],
//     exams: 'ЕГЭ',
//     duration: '07:00:00',
//     description:
//       'Курс охватывает ключевые события, реформы и личности России XX века. Курс охватывает ключевые события, реформы и личности России XX века.',
//     price: 1590,
//     discount: 5,
//     image: {
//       id: 1,
//       url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
//       alt: 'alt',
//     },
//   },
//   {
//     id: '5',
//     title: 'Основы программирования на Python',
//     categories: ['Математика'],
//     exams: 'ЕГЭ',
//     duration: '12:20:00',
//     description: 'Базовый курс по Python для школьников и начинающих разработчиков.',
//     price: 4490,
//     discount: 20,
//     image: {
//       id: 1,
//       url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
//       alt: 'alt',
//     },
//   },
// ]

export async function Profile() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  const payload = await JwtService.verifyToken(accessToken)

  const purchases = await getPurchasesCourses(Number(payload.id))

  const testIds = purchases.Purchases.docs
    ?.flatMap((p) => p.course.kinescopeVideos)
    // 2) оставляем только те видео, у которых есть непустое поле test
    .filter((v) => v.test != null)
    // 3) забираем только сами test‑id
    .map((v) => v.test?.id)

  const [testHistory, recommendations] = await Promise.allSettled([
    getTestHistoryByUserId({
      userId: payload.id,
      testIds,
    }),
    getRecommendations({
      userId: payload.id,
    }),
  ])

  const testHistoryVal = getSettledValue(testHistory)
  const recommendationsVal = getSettledValue(recommendations)

  return (
    <section className="max-mobile:py-6 py-12">
      <div className="flex w-full items-center justify-between gap-4">
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
    </section>
  )
}
