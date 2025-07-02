import payload from 'payload'

export const seedFaqs = async () => {
  console.log('📘 Обновление FAQ...')

  const { docs: existingFaqs } = await payload.find({
    collection: 'faqs',
    limit: 100,
  })

  for (const faq of existingFaqs) {
    await payload.delete({
      collection: 'faqs',
      id: faq.id,
    })
  }

  const faqData = [
    {
      question: 'Как пройти тест?',
      answer: 'Перейдите в раздел "Тесты", выберите доступный тест и нажмите "Начать".',
    },
    {
      question: 'Как выбрать тариф?',
      answer: 'Вы можете изменить тариф в настройках профиля, выбрав подходящий вариант.',
    },
    {
      question: 'Можно ли повторно пройти тест?',
      answer: 'Да, но результаты прошлых попыток также сохраняются в истории.',
    },
  ]

  await Promise.all(
    faqData.map((faq) =>
      payload.create({
        collection: 'faqs',
        data: faq,
      }),
    ),
  )
}
