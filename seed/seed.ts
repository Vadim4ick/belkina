import { seedHomePage } from './data/homePage'
import { seedFaqs } from './data/faqs'
import { seedTariffs } from './data/tariffs'
import { clearTariffsInUsers } from './data/_clear'
import { createTests } from './data/tests'

export const seed = async () => {
  console.log('🌱 Запуск сидеров...')

  await clearTariffsInUsers()
  await seedTariffs()
  await seedFaqs()
  await seedHomePage()
  await createTests()

  console.log('✅ Сидеры завершены.')
}
