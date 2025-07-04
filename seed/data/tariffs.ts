import payload from 'payload'

export const seedTariffs = async () => {
  console.log('💸 Обновление тарифов...')

  const { docs: existingTariffs } = await payload.find({
    collection: 'tariffs',
    limit: 100,
  })

  for (const tariff of existingTariffs) {
    await payload.delete({
      collection: 'tariffs',
      id: tariff.id,
    })
  }

  const tariffs = await Promise.all([
    payload.create({
      collection: 'tariffs',
      data: {
        title: 'Базовый',
        price: 0,
        subtitle: 'Для начинающих',
        type: 'basic',
        description: 'Доступ к базовым функциям и ограниченному числу тестов.',
        benefits: [{ value: 'Доступ к 5 тестам' }, { value: 'Базовая аналитика' }],
      },
    }),
    payload.create({
      collection: 'tariffs',
      data: {
        title: 'Профессиональный',
        price: 990,
        type: 'pro',
        subtitle: 'Для активных пользователей',
        description: 'Расширенный доступ к обучающим материалам и тестам.',
        benefits: [
          { value: 'Все тесты' },
          { value: 'Подробная аналитика' },
          { value: 'Приоритетная поддержка' },
        ],
      },
    }),
    payload.create({
      collection: 'tariffs',
      data: {
        title: 'Корпоративный',
        price: 4990,
        type: 'corporate',
        subtitle: 'Для команд и компаний',
        description:
          'Возможность прохождения тестов в команде и расширенные функции администрирования.',
        benefits: [
          { value: 'Всё из проф. тарифа' },
          { value: 'Поддержка команд' },
          { value: 'Отчёты и выгрузки' },
        ],
      },
    }),
  ])

  return tariffs
}
