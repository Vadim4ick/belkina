import { checkAccessToken } from '@/shared/lib/utils'
import { CollectionConfig } from 'payload'

export const TestResults: CollectionConfig = {
  slug: 'testResults',
  admin: {
    useAsTitle: 'id',
    group: 'Тестирование',
  },
  access: {
    read: checkAccessToken,
    create: checkAccessToken,
    update: checkAccessToken,
    // read: ({ req: { user } }) => !!user,
    // create: ({ req: { user } }) => !!user,
    // update: ({ req: { user } }) => !!user,
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
      name: 'status',
      label: 'Статус',
      type: 'select',
      required: true,
      defaultValue: 'in_progress',
      options: [
        { label: 'Завершён', value: 'completed' },
        { label: 'В процессе', value: 'in_progress' },
      ],
    },
    {
      name: 'answers',
      label: 'Ответы пользователя',
      type: 'array',
      fields: [
        {
          name: 'question',
          label: 'Вопрос',
          type: 'relationship',
          relationTo: 'questions',
          required: true,
        },
        {
          name: 'userAnswer',
          label: 'Ответ пользователя',
          type: 'json', // для поддержки разных типов: строка, массив, объект
          required: true,
        },
        {
          name: 'isCorrect',
          label: 'Правильный ответ?',
          type: 'checkbox',
        },
      ],
    },
    // {
    //   name: 'score',
    //   label: 'Процент правильных ответов',
    //   type: 'number',
    //   min: 0,
    //   max: 100,
    // },
  ],
}
