import { CollectionConfig } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { CacheKeys } from '../redis/cache-keys'
import { invalidateTags } from '../redis/gqlCached'

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

  hooks: {
    afterChange: [
      async () => {
        await invalidateTags(CacheKeys.tags.recommendationsAll())
      },
    ],

    afterDelete: [
      async () => {
        await invalidateTags(CacheKeys.tags.recommendationsAll())
      },
    ],
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
      name: 'description',
      type: 'richText',
      label: 'Описание',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          HorizontalRuleFeature(),
        ],
      }),
    },
  ],
}
