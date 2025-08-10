import payload from 'payload'

export const clearSeeds = async () => {
  console.log('🧹 Обнуляем коллекции...')

  try {
    // 1️⃣ Тестовые данные и результаты
    await payload.delete({ collection: 'testResults', where: {} })
    await payload.delete({ collection: 'questions', where: {} })
    await payload.delete({ collection: 'recomendations', where: {} })
    await payload.delete({ collection: 'tests', where: {} })

    // 2️⃣ Exams и Subjects
    await payload.delete({ collection: 'exams', where: {} })
    await payload.delete({ collection: 'subjects', where: {} })

    // 4️⃣ Очистить тарифы
    await payload.delete({ collection: 'tariffs', where: {} })

    await payload.delete({ collection: 'webinars', where: {} })

    console.log('✅ Все коллекции очищены')
  } catch (err) {
    console.error('❌ Ошибка при очистке:', err)
    throw err
  }
}
