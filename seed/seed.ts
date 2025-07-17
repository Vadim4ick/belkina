import { seedHomePage } from './data/homePage'
import { seedFaqs } from './data/faqs'
import { clearSeeds } from './data/_clear'
import { createTests } from './data/tests'
import { seedRecommendations } from './data/recomendations'
import { seedExams, seedSubjects } from './data/categories'

export const seed = async () => {
  console.log('🌱 Запуск сидеров...')

  await clearSeeds()

  await seedFaqs()
  await seedHomePage()

  await seedExams()
  await seedSubjects()

  const recommendation = await seedRecommendations()
  await createTests(recommendation.id)

  console.log('✅ Сидеры завершены.')
}
