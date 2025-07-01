import payload from 'payload'

export const clearSeeds = async () => {
  console.log('🧹 Обнуляем коллекции...')

  await payload.delete({ collection: 'tests', where: {} })
  const { docs: usersWithTariff } = await payload.find({
    collection: 'users',
    where: {
      tariff: {
        exists: true,
      },
    },
    limit: 100,
  })

  for (const user of usersWithTariff) {
    await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        tariff: null,
      },
    })
  }

  await payload.delete({ collection: 'testResults', where: {} })
  await payload.delete({ collection: 'questions', where: {} })
  await payload.delete({ collection: 'recomendations', where: {} })
  await payload.delete({ collection: 'exams', where: {} })
  await payload.delete({ collection: 'subjects', where: {} })
}
