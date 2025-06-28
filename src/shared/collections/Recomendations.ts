import { CollectionConfig } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  UnorderedListFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Recomendations: CollectionConfig = {
  slug: 'recomendations',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tariff'],
  },
  labels: {
    singular: {
      ru: 'Рекомендация',
      en: 'Recommendation',
    },
    plural: {
      ru: 'Рекомендации',
      en: 'Recommendations',
    },
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      label: 'Заголовок',
      type: 'text',
      required: true,
    },

    {
      name: 'tariff',
      label: 'Тариф',
      type: 'relationship',
      relationTo: 'tariffs',
      required: false,
      admin: { position: 'sidebar' },
    },

    {
      name: 'description',
      label: 'Описание',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: () => [
          HeadingFeature({
            enabledHeadingSizes: ['h3', 'h4'],
          }),
          UnorderedListFeature(),
          FixedToolbarFeature(),
        ],
      }),
      admin: {
        description: 'Можно использовать заголовки и нумерованные списки',
      },
    },
  ],
}
