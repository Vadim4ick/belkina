import { CollectionConfig } from 'payload'

export const WebinarPayments: CollectionConfig = {
  slug: 'webinar-payments',
  labels: {
    singular: 'Оплата вебинара',
    plural: 'Оплаты вебинаров',
  },
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['user', 'webinar', 'createdAt'],
    group: 'Результаты',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'user',
      label: 'Пользователь',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'webinar',
      label: 'Вебинар',
      type: 'relationship',
      relationTo: 'webinars',
      required: true,
    },
    {
      name: 'paid',
      label: 'Оплачено',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  timestamps: true,
}
