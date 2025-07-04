import { CollectionConfig } from 'payload'

export const Tariffs: CollectionConfig = {
  slug: 'tariffs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price'],
  },
  labels: {
    singular: {
      ru: 'Тариф',
      en: 'Tariff',
    },
    plural: {
      ru: 'Тарифы',
      en: 'Tariffs',
    },
  },

  access: {
    create: async ({ req }) => {
      const { docs } = await req.payload.find({
        collection: 'tariffs',
        depth: 0,
      })
      return docs?.length < 3
    },
    read: () => true,
  },

  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'type',
      label: 'Тип тарифа',
      type: 'select',
      required: true,
      options: [
        { label: 'Базовый', value: 'basic' },
        { label: 'Корпоративный', value: 'corporate' },
        { label: 'Профессиональный', value: 'pro' },
      ],
    },
    {
      name: 'subtitle',
      required: true,
      type: 'text',
    },
    {
      name: 'description',
      required: true,
      type: 'textarea',
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Преимущества',
      labels: {
        singular: 'Преимущество',
        plural: 'Преимущества',
      },
      required: true,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'value',
          label: 'Описание',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
