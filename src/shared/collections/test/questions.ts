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
    // read: checkAccessToken,
    read: () => true,
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

      validate: (answers, { data }) => {
        const questionType = (data as { questionType?: string })?.questionType

        if (questionType !== 'single_choice') return true

        const correctCnt = Array.isArray(answers)
          ? answers.filter((a) => (a as { isCorrect?: boolean })?.isCorrect).length
          : 0

        if (correctCnt !== 1) {
          return 'Для вопросов с одним правильным ответом должна быть выбрана ровно одна галочка «Правильный?»'
        }

        return true
      },
      fields: [
        { name: 'label', label: 'Ответ', type: 'text' },
        { name: 'value', label: 'Значение', type: 'text' },
        { name: 'isCorrect', label: 'Правильный?', type: 'checkbox' },
      ],
    },

    {
      name: 'textAnswer',
      label: 'Правильный ответ',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData.questionType === 'text_input',
      },
    },

    {
      name: 'recommendation',
      label: 'Рекомендация (В случае неправильного ответа)',
      type: 'relationship',
      relationTo: 'recomendations',
      required: false,
      admin: {
        position: 'sidebar',
      },
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
