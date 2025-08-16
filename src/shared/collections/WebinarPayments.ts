import { CollectionConfig } from 'payload'
import { invalidateTags } from '../redis/gqlCached'
import { CacheKeys } from '../redis/cache-keys'

export const WebinarPayments: CollectionConfig = {
  slug: 'webinar-payments',
  labels: { singular: 'Оплата вебинара', plural: 'Оплаты вебинаров' },
  admin: {
    useAsTitle: 'paymentId',
    defaultColumns: ['user', 'webinar', 'amount', 'currency', 'status', 'paid', 'createdAt'],
    group: 'Результаты',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  hooks: {
    afterDelete: [
      async () => {
        await invalidateTags(CacheKeys.tags.webinars())
      },
    ],
  },
  fields: [
    // Ключи сущностей
    {
      name: 'user',
      label: 'Пользователь',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      index: true,
    },
    {
      name: 'webinar',
      label: 'Вебинар',
      type: 'relationship',
      relationTo: 'webinars',
      required: true,
      index: true,
    },

    {
      name: 'paymentId',
      label: 'ID платежа (YooKassa)',
      type: 'text',
      required: true,
      unique: true, // удобнее искать/синкать
      admin: { readOnly: true },
      index: true,
    },

    // Сумма и валюта
    // Совет: хранить сумму как строку ИЛИ как целые копейки, чтобы избежать проблем с float
    {
      type: 'row',
      fields: [
        {
          name: 'amount',
          label: 'Сумма',
          type: 'number', // можно заменить на text, если хочешь хранить "1000.00"
          min: 0,
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'currency',
          label: 'Валюта',
          type: 'text',
          defaultValue: 'RUB',
          admin: { width: '50%' },
        },
      ],
    },

    // Статусы/флаги
    {
      name: 'status',
      label: 'Статус (YooKassa)',
      type: 'select',
      options: [
        { label: 'pending', value: 'pending' },
        { label: 'waiting_for_capture', value: 'waiting_for_capture' },
        { label: 'succeeded', value: 'succeeded' },
        { label: 'canceled', value: 'canceled' },
        { label: 'refunded', value: 'refunded' },
      ],
      defaultValue: 'pending',
      required: true,
      index: true,
    },

    // Техн. данные для отладки/возвратов (опционально, но полезно)

    {
      name: 'metadata',
      label: 'Metadata (YooKassa)',
      type: 'json',
      admin: { description: 'Обычно { userId, webinarId }' },
    },
    {
      name: 'failure',
      label: 'Ошибка платежа',
      type: 'group',
      admin: { description: 'Заполняется при canceled/ошибках' },
      fields: [
        { name: 'code', label: 'Код', type: 'text' },
        { name: 'message', label: 'Сообщение', type: 'text' },
      ],
    },
  ],

  timestamps: true,
}
