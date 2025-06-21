import { CollectionConfig } from 'payload'

export const TestQuestions: CollectionConfig = {
  slug: 'test-questions',
  labels: {
    singular: 'Вопрос',
    plural: 'Вопросы тестов',
  },
  admin: {
    useAsTitle: 'test',
    defaultColumns: ['test'],
    group: 'Тесты',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'test',
      label: 'Тест',
      type: 'relationship',
      relationTo: 'tests',
      required: true,
    },
    {
      name: 'errors',
      label: 'Грамматические ошибки (левый столбец)',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'label',
          label: 'Ошибка',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'proposals',
      label: 'Предложения (правый столбец)',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'label',
          label: 'Предложение',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
