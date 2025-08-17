import { seedHomePage } from './data/homePage'
import { seedFaqs } from './data/faqs'
import { clearSeeds } from './data/_clear'
import { createTests } from './data/tests'
import { seedRecommendations } from './data/recomendations'
import { seedExams, seedSubjects } from './data/categories'
import { seedTariffs } from './data/tariffs'
import { seedWebinars } from './data/webinars'

export const seed = async () => {
  console.log('🌱 Запуск сидеров...')

  // if (process.env.NODE_ENV === 'production') {
  //   throw new Error('Сидеры запрещены в продакшене')
  // }

  await clearSeeds()

  await seedTariffs()
  await seedFaqs()
  await seedHomePage()

  await seedExams()
  await seedSubjects()

  const recommendation = await seedRecommendations()
  await createTests(recommendation.id)

  await seedWebinars()

  console.log('✅ Сидеры завершены.')
}
