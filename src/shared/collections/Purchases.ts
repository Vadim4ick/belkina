import { CollectionConfig } from 'payload'

const Purchases: CollectionConfig = {
  slug: 'purchases',

  admin: {
    useAsTitle: 'id',
    group: 'Результаты',
  },
  labels: {
    singular: 'Покупка',
    plural: 'Покупки',
  },

  access: {
    read: () => true,
    create: () => true,
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
      name: 'course',
      label: 'Курс',
      type: 'relationship',
      relationTo: 'courses',
      required: true,
    },
    {
      name: 'tariff',
      label: 'Тариф',
      type: 'relationship',
      relationTo: 'tariffs',
      required: true,
    },
    {
      name: 'pricePaid',
      label: 'Цена оплаты',
      type: 'number',
      required: true,
    },
    {
      name: 'purchasedAt',
      label: 'Дата покупки',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
}

export default Purchases
