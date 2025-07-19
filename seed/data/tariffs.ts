import payload from 'payload'

export const seedTariffs = async () => {
  console.log('💸 Обновление тарифов...')

  const tariffs = await Promise.all([
    // payload.create({
    //   collection: 'tariffs',
    //   data: {
    //     title: 'Базовый',
    //     price: 0,
    //     subtitle: 'Для начинающих',
    //     isFree: true,
    //     description: 'Доступ к базовым функциям и ограниченному числу тестов.',
    //     benefits: [{ value: 'Доступ к 5 тестам' }, { value: 'Базовая аналитика' }],
    //   },
    // }),
    payload.create({
      collection: 'tariffs',
      data: {
        title: 'Профессиональный',
        price: 990,
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
