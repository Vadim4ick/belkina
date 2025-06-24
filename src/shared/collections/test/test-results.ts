import { CollectionConfig } from 'payload'

export const TestResults: CollectionConfig = {
  slug: 'testResults',
  labels: {
    singular: 'Результат теста',
    plural: 'Результаты тестов',
  },
  admin: {
    useAsTitle: 'test',
    group: 'Тестирование',
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
      name: 'user',
      label: 'Пользователь',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'answers',
      label: 'Ответы',
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
          type: 'text',
        },
        {
          name: 'isCorrect',
          label: 'Правильно?',
          type: 'checkbox',
        },
      ],
    },
    {
      name: 'score',
      label: 'Баллы',
      type: 'number',
    },
    {
      name: 'completedAt',
      label: 'Дата прохождения',
      type: 'date',
    },
  ],
}
