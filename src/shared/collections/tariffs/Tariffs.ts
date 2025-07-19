import { CollectionConfig } from 'payload'
export const Tariffs: CollectionConfig = {
  slug: 'tariffs',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'isFree'],
  },

  labels: {
    singular: 'Тариф',
    plural: 'Тарифы',
  },

  access: {
    create: async ({ req }) => {
      const { docs } = await req.payload.find({
        collection: 'tariffs',
        depth: 0,
      })
      return docs?.length < 2
    },
    read: () => true,
    delete: () => true,
  },

  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Название',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'price',
          label: 'Цена',
          type: 'number',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },

    {
      name: 'description',
      label: 'Описание',
      required: true,
      type: 'textarea',
    },

    {
      name: 'benefits',
      label: 'Преимущества',
      type: 'array',
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
          label: 'Описание преимущества',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
