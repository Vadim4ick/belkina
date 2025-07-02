/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getServerGqlClient } from '@/shared/graphql/client'
import { Typography } from '@/shared/ui/typography'
import { ProductCard } from '@/widgets/product-card'
import { ProductCardsGridCatalog } from '@/widgets/product-cards-grid-catalog'
import { TestsHistory } from '@/widgets/tests-history'
import { Topic } from './topic'
import { auth } from '@/entities/user/auth'

const mockProducts = [
  {
    id: '1',
    title: 'Информационная обработка письменных текстов',
    categories: ['ЕГЭ', 'Платно'],
    duration: '11:30:20',
    description:
      'В этом материале будут основные правила по русскому языку, которые пригодятся на ЕГЭ',
    price: 3790,
    discount: 10,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Физика: Разбор задач на кинематику',
    categories: ['ОГЭ', 'Бесплатно'],
    duration: '05:12:00',
    description:
      'Подробный разбор задач на движение тел. Подходит для подготовки к ОГЭ и олимпиадам.',
    price: 0,
    discount: 0,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Математика: Производные и интегралы',
    categories: ['ЕГЭ', 'Платно'],
    duration: '08:45:10',
    description: 'Разбор тем по высшей математике для студентов и старшеклассников.',
    price: 2990,
    discount: 15,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'История России: XX век',
    categories: ['ОГЭ', 'Платно'],
    duration: '07:00:00',
    description:
      'Курс охватывает ключевые события, реформы и личности России XX века. Курс охватывает ключевые события, реформы и личности России XX века.',
    price: 1590,
    discount: 5,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Основы программирования на Python',
    categories: ['ЕГЭ', 'Платно'],
    duration: '12:20:00',
    description: 'Базовый курс по Python для школьников и начинающих разработчиков.',
    price: 4490,
    discount: 20,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
]

async function loadRecommendations(userId?: string) {
  const gql = await getServerGqlClient()

  if (!userId) return []

  const res = await gql.GetNotCorrectedAnswers({ userId })

  const recommendationIds = Array.from(
    new Map(
      res.TestResults.docs
        .flatMap((doc) => doc.answers)
        .filter((answer) => !answer.isCorrect && answer.question?.recommendation?.id)
        .map((answer) => {
          const rec = answer.question.recommendation
          return [rec.id, rec]
        }),
    ).values(),
  ).map((rec) => rec.id)

  if (recommendationIds.length === 0) return []

  const where = { OR: recommendationIds.map((id) => ({ id: { equals: id } })) }

  // @ts-ignore
  const recommendationsRes = await gql.GetRecommendationsByIds({ where })

  return recommendationsRes.Recomendations.docs
}

export async function Profile() {
  const gql = await getServerGqlClient()

  const session = await auth()
  const userId = session?.user?.id

  const testHistory = await gql.GetTestResHistory({ userId: userId })

  const recommendations = await loadRecommendations(userId)

  return (
    <section className="max-mobile:py-6 py-12">
      <Typography tag="h1" variant="visuelt-bold-48" className="mb-6">
        Профиль
      </Typography>

      {recommendations.length > 0 && <Topic recomendations={recommendations} />}

      <TestsHistory testHistory={testHistory.TestResults.docs} />

      <ProductCardsGridCatalog title="Бесплатные материалы">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductCardsGridCatalog>
      <ProductCardsGridCatalog title="Каталог">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductCardsGridCatalog>
    </section>
  )
}
