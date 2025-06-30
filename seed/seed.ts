import { seedHomePage } from './data/homePage'
import { seedFaqs } from './data/faqs'
import { seedTariffs } from './data/tariffs'
import { clearTariffsInUsers } from './data/_clear'
import { createTests } from './data/tests'
import { seedRecommendations } from './data/recomendations'

export const seed = async () => {
  console.log('🌱 Запуск сидеров...')

  await clearTariffsInUsers()

  const tariffs = await seedTariffs()
  await seedFaqs()
  await seedHomePage()

  const recommendation = await seedRecommendations(tariffs)
  await createTests(recommendation.id, tariffs[0].id)

  console.log('✅ Сидеры завершены.')
}
