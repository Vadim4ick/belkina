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

    // 3️⃣ Обнулить тарифы у пользователей
    const { docs: usersWithTariff } = await payload.find({
      collection: 'users',
      where: { tariff: { exists: true } },
      limit: 1000,
    })

    for (const user of usersWithTariff) {
      await payload.update({
        collection: 'users',
        id: user.id,
        data: { tariff: null },
      })
    }

    console.log(`✅ Обнулены тарифы у ${usersWithTariff.length} пользователей`)

    // 4️⃣ Очистить тарифы
    await payload.delete({ collection: 'tariffs', where: {} })

    console.log('✅ Все коллекции очищены')
  } catch (err) {
    console.error('❌ Ошибка при очистке:', err)
    throw err
  }
}
