/* eslint-disable @typescript-eslint/ban-ts-comment */
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
import { getServerAuthGqlClient } from '../actions/getServerAuthGqlClient'
import { getUserIdByToken } from '../lib/utils'

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
      async ({ data, originalDoc, req }) => {
        const payload = req.payload

        if (data.title && data.title !== originalDoc?.title) {
          const base = slugify(data.title, { lower: true, strict: true })
          let slug = base

          // ищем, есть ли такой slug, но исключаем текущий документ при update
          const existing = await payload.find({
            collection: 'webinars',
            where: { slug: { equals: slug } },
          })

          const alreadyExists = existing.docs.some((doc) => doc.id !== originalDoc?.id)

          if (alreadyExists) {
            slug = `${base}-${Date.now()}`
          }

          data.slug = slug
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
      min: 1,
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
        read: () => true, // <-- всегда "видно", но содержимое можем подменять
      },

      hooks: {
        afterRead: [
          async ({ value, req, siblingData }) => {
            const gql = await getServerAuthGqlClient({})

            // админам всегда можно
            if (req.user?.role === 'admin') return value

            // бесплатные вебы — тоже можно
            if (siblingData?.type === 'free') return value

            const secret = req.headers?.get('x-internal-secret')

            if (secret && secret === process.env.INTERNAL_WEBHOOK_SECRET) {
              return value
            }

            const res = await getUserIdByToken({ req })

            if (!res) return null

            // платные — проверяем оплату
            const payments = await gql.GetWebinarPaymentByUserId({
              userId: res.id,
              webinarId: siblingData.id,
            })

            if (payments?.WebinarPayments?.docs?.length > 0) {
              return value // доступ есть
            }

            return null // скрываем ссылку
          },
        ],
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
