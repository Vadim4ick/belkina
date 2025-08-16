import { CacheKeys } from '@/shared/redis/cache-keys'
import { invalidateTags } from '@/shared/redis/gqlCached'
import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'homePage',
  label: 'Главная страница',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Страницы',
  },
  hooks: {
    afterChange: [
      async () => {
        await invalidateTags(CacheKeys.tags.getFAQ())
        await invalidateTags(CacheKeys.tags.getHomePage())
      },
    ],
  },

  fields: [
    {
      name: 'Meta',
      label: 'Мета данные страницы',
      type: 'group',
      fields: [
        {
          name: 'seo-title',
          label: 'SEO Заголовок',
          type: 'text',
        },
        {
          name: 'seo-description',
          label: 'SEO Описание',
          type: 'text',
        },
      ],
    },
    {
      name: 'featuredTest',
      label: 'Выбранный тест для отображения',
      type: 'relationship',
      relationTo: 'tests',
      required: false, // или true — по желанию
      maxDepth: 1, // подтянет поля теста, например, title
    },
    {
      name: 'mainOfferBanner',
      label: 'БЕСПЛАТНЫЙ ПЕРВЫЙ ВИДЕОУРОК',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Заголовок',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          label: 'Описание',
          type: 'textarea',
          required: true,
          localized: true,
        },
        {
          name: 'label',
          label: 'Надпись',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'options',
          label: 'Пункты списка',
          type: 'array',
          required: true,
          maxRows: 3,
          labels: {
            singular: 'Пункт',
            plural: 'Пункты',
          },
          fields: [
            {
              name: 'text',
              label: 'Текст',
              type: 'text',
              localized: true,
            },
          ],
        },
      ],
    },
    {
      name: 'aboutProjectBanner',
      label: 'О проекте, с Белкиной',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Заголовок',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'subtitle',
          label: 'Подзаголовок',
          type: 'text',
          required: true,
          localized: true,
        },
        // {
        //   name: 'description',
        //   label: 'Описание',
        //   type: 'textarea',
        //   required: true,
        //   localized: true,
        // },

        {
          name: 'desc',
          type: 'richText',
          label: 'Содержание',
          required: false,
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

        {
          name: 'media',
          label: 'Медиа файл',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
    {
      name: 'diagnosticTestBanner',
      label: 'с CTA',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Заголовок',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'subtitle',
          label: 'Подзаголовок',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'label',
          label: 'Надпись кнопки/лейбл',
          type: 'text',
          required: true,
          localized: true,
        },
      ],
    },
  ],
}
