import { checkAccessToken } from '@/shared/lib/utils'
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
    read: async ({ req }) => {
      // 1. Если админ или API-токен — разрешить (переиспользуем checkAccessToken)
      if (await checkAccessToken({ req })) return true

      // 3. Если тариф не базовый — доступ только с токеном
      return false
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
      required: false,
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
