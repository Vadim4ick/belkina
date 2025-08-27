import { CollectionConfig } from 'payload'
import { invalidateTags } from '../redis/gqlCached'
import { CacheKeys } from '../redis/cache-keys'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

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
      name: 'description',
      type: 'richText',
      label: 'Описание',
      required: false,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [...rootFeatures],
      }),
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await invalidateTags(CacheKeys.tags.getFAQ())
      },
    ],
    afterDelete: [
      async () => {
        await invalidateTags(CacheKeys.tags.getFAQ())
      },
    ],
  },
  access: {
    read: () => true, // можно читать публично
  },
  timestamps: true,
}
