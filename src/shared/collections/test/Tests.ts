import { CollectionConfig } from 'payload'

export const Tests: CollectionConfig = {
  slug: 'tests',
  labels: {
    singular: 'Тест',
    plural: 'Тесты',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
    group: 'Тесты',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Название теста',
      type: 'text',
      required: true,
    },
    {
      name: 'instruction',
      label: 'Инструкция',
      type: 'textarea',
      required: true,
      defaultValue:
        'Установите соответствие между грамматическими ошибками и предложениями, в которых они допущены...',
    },
  ],
}
