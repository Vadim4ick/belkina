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

    // 🔗 Ссылка
    {
      name: 'url',
      label: 'Ссылка на трансляцию / комнату',
      type: 'text',
      required: true,
      admin: { placeholder: 'https://…' },
    },

    // 🖼 Превью
    {
      name: 'preview',
      label: 'Превью-изображение',
      type: 'upload',
      relationTo: 'media',
      required: false,
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
  ],

  access: {
    read: () => true,
  },

  timestamps: true,
}

export { Webinars }
