import { CollectionConfig } from 'payload'

export const TestQuestions: CollectionConfig = {
  slug: 'questions',
  labels: {
    singular: 'Вопрос',
    plural: 'Вопросы',
  },
  admin: {
    useAsTitle: 'questionText',
    group: 'Тестирование',
  },
  access: {
    read: () => true, // можно читать публично
  },
  fields: [
    {
      name: 'questionText',
      label: 'Формулировка вопроса',
      type: 'text',
      required: true,
    },
    {
      name: 'questionType',
      label: 'Тип вопроса',
      type: 'select',
      required: true,
      options: [
        { label: 'Один правильный ответ', value: 'single_choice' },
        { label: 'Несколько правильных ответов', value: 'multiple_choice' },
        { label: 'Соответствие', value: 'matching' },
        { label: 'Текстовый ответ', value: 'text_input' },
      ],
    },
    {
      name: 'answers',
      label: 'Варианты ответов',
      type: 'array',
      admin: {
        condition: (_, siblingData) =>
          siblingData.questionType === 'single_choice' ||
          siblingData.questionType === 'multiple_choice',
      },
      fields: [
        { name: 'label', label: 'Ответ', type: 'text' },
        { name: 'value', label: 'Значение', type: 'text' },
        { name: 'isCorrect', label: 'Правильный?', type: 'checkbox' },
      ],
    },
    {
      name: 'matchingPairs',
      label: 'Пары соответствий',
      type: 'array',
      admin: {
        condition: (_, siblingData) => siblingData.questionType === 'matching',
      },
      fields: [
        { name: 'left', label: 'Левая часть', type: 'text' },
        { name: 'right', label: 'Правая часть', type: 'text' },
      ],
    },
  ],
}
