import { CollectionConfig } from 'payload'

export const UserTestProgress: CollectionConfig = {
  slug: 'user-test-progress',
  labels: {
    singular: 'Прогресс пользователя',
    plural: 'Прогресс пользователей',
  },
  admin: {
    useAsTitle: 'user',
    defaultColumns: ['user', 'test', 'progress'],
    group: 'Тесты',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'user',
      label: 'Пользователь',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'test',
      label: 'Тест',
      type: 'relationship',
      relationTo: 'tests',
      required: true,
    },
    {
      name: 'progress',
      label: 'Прогресс (%)',
      type: 'number',
      required: true,
      min: 0,
      max: 100,
    },
    {
      name: 'completedQuestions',
      label: 'Пройденные вопросы',
      type: 'array',
      fields: [
        {
          name: 'question',
          type: 'relationship',
          relationTo: 'test-questions',
          required: true,
        },
      ],
    },
  ],
}
