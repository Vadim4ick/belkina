import { Typography } from '@/shared/ui/typography'
import { TestsHistory } from '@/widgets/tests-history'
import { Topic } from './topic'
import { cookies } from 'next/headers'
import { JwtService } from '@/shared/services/jwt-service'
import { getTestHistoryByUserId } from '@/shared/actions/test.action'
import { getRecommendations } from '@/shared/actions/recommendation.action'

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

  const testHistory = await getTestHistoryByUserId({
    userId: payload.id,
  })

  const recommendations = await getRecommendations({
    userId: payload.id,
  })

  return (
    <section className="max-mobile:py-6 py-12">
      <Typography tag="h1" variant="visuelt-bold-48" className="mb-6">
        Профиль
      </Typography>

      {recommendations?.GetUserRecommendations?.length > 0 && (
        <Topic recomendations={recommendations.GetUserRecommendations} />
      )}

      <TestsHistory testHistory={testHistory.TestResults.docs} />

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
