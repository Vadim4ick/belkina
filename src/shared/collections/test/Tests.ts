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
