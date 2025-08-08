import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

import { MediaBlock } from '@/shared/blocks/MediaBlock/config'
import slugify from 'slugify'
import { invalidateTags } from '../redis/gqlCached'
import { CacheKeys } from '../redis/cache-keys'

const Webinars: CollectionConfig = {
  slug: 'webinars',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'price', 'startsAt', 'createdAt'],
  },

  labels: {
    singular: 'Вебинар',
    plural: 'Вебинары',
  },

  hooks: {
    beforeChange: [
      async ({ data, originalDoc }) => {
        if (data.title && data.title !== originalDoc?.title) {
          data.slug = slugify(data.title, { lower: true, strict: true })
        }

        return data
      },
    ],

    afterChange: [
      async ({ doc, operation, previousDoc }) => {
        if (operation === 'create') {
          await invalidateTags(
            CacheKeys.tags.webinarBySlug({
              slug: doc?.slug,
            }),
          )
        } else {
          await invalidateTags(
            CacheKeys.tags.webinarBySlug({
              slug: previousDoc?.slug,
            }),
          )
        }

        await invalidateTags(CacheKeys.tags.webinars())
      },
    ],

    afterDelete: [
      async ({ doc }) => {
        await invalidateTags(
          CacheKeys.tags.webinarBySlug({
            slug: doc?.slug,
          }),
        )
      },
    ],
  },

  fields: [
    // 🎓 Название
    {
      name: 'title',
      label: 'Тема вебинара',
      type: 'text',
      required: true,
    },

    // 📚 Тип вебинара
    {
      name: 'type',
      label: 'Тип занятия',
      type: 'select',
      required: true,
      defaultValue: 'free',
      options: [
        { label: '🎓 Минигруппа', value: 'minigroup' },
        { label: '📚 Разбор заданий ЕГЭ/ОГЭ', value: 'exam_practice' },
        { label: '🎤 Бесплатный вебинар', value: 'free' },
        { label: '🧑‍🏫 Индивидуальное занятие', value: 'individual' },
      ],
    },

    // 🧑‍🏫 Условные поля: лимит участников для минигрупп
    {
      name: 'maxParticipants',
      label: 'Максимальное кол-во учеников',
      type: 'number',
      min: 2,
      max: 10,
      admin: {
        condition: (_, siblingData) => siblingData.type === 'minigroup',
      },
      required: false,
    },

    // 📅 Дата
    {
      name: 'startsAt',
      label: 'Дата и время начала',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',

          displayFormat: 'dd.MM.yyyy HH:mm',
        },
      },
    },

    // 📅 Дата и время окончания
    {
      name: 'endAt',
      label: 'Дата и время окончания',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'dd.MM.yyyy HH:mm',
        },
      },
      validate: (value, { siblingData }) => {
        const start = new Date((siblingData as { startsAt?: string })?.startsAt || '')

        if (!value || isNaN(start.getTime())) return true

        const end = new Date(value)
        if (end < start) {
          return 'Дата окончания не может быть раньше даты начала'
        }

        return true
      },
    },

    // 🔗 Ссылка
    {
      name: 'url',
      label: 'Ссылка на трансляцию / комнату',
      type: 'text',
      required: true,
      admin: { placeholder: 'https://…' },
      access: {
        read: ({ siblingData, req }) => {
          if (req.user?.role === 'admin') return true

          const isFree = siblingData?.type === 'free'

          return isFree
        },
      },
    },

    // 💰 Цена (прячем при бесплатном типе)
    {
      name: 'price',
      label: 'Стоимость, ₽ (0 — бесплатный)',
      type: 'number',
      min: 0,
      admin: {
        step: 10,
        condition: (_, siblingData) => siblingData.type !== 'free',
      },
      required: false,
    },

    // 📄 Содержание
    {
      name: 'content',
      type: 'richText',
      label: 'Содержание',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          BlocksFeature({ blocks: [MediaBlock] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          HorizontalRuleFeature(),
        ],
      }),
    },

    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],

  access: {
    read: () => true,
  },

  timestamps: true,
}

export { Webinars }
