import { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'createdAt'],
  },
  labels: {
    singular: 'Вопрос',
    plural: 'Часто задаваемые вопросы',
  },
  fields: [
    {
      name: 'question',
      label: 'Вопрос',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      label: 'Ответ',
      type: 'textarea',
      required: true,
    },
  ],
  access: {
    read: () => true, // можно читать публично
  },
  timestamps: true,
}
