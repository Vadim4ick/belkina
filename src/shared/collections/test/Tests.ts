import { CollectionConfig } from 'payload'

export const Tests: CollectionConfig = {
  slug: 'tests',
  labels: {
    singular: 'Тест',
    plural: 'Тесты',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Тестирование',
  },
  access: {
    read: async () => {
      // 1. Если админ или API-токен — разрешить (переиспользуем checkAccessToken)
      // if (await checkAccessToken({ req })) return true

      // 2. Если тариф не базовый — доступ только с токеном
      return true
    },
  },
  fields: [
    {
      name: 'title',
      label: 'Название теста',
      type: 'text',
      required: true,
    },

    {
      name: 'tariff',
      label: 'Тариф',
      type: 'relationship',
      relationTo: 'tariffs',
      required: true,
      admin: { position: 'sidebar' },
    },

    {
      name: 'description',
      label: 'Описание',
      type: 'textarea',
    },
    {
      name: 'questions',
      label: 'Вопросы',
      type: 'relationship',
      relationTo: 'questions',
      hasMany: true,
    },
  ],
}
