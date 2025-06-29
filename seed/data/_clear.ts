import payload from 'payload'

export const clearTariffsInUsers = async () => {
  console.log('🧹 Обнуляем тарифы у пользователей...')

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
  await payload.delete({ collection: 'tests', where: {} })
  await payload.delete({ collection: 'questions', where: {} })
  await payload.delete({ collection: 'recomendations', where: {} })
}
