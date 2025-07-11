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

  hooks: {
    beforeChange: [
      async ({ data, req, operation, originalDoc }) => {
        if (data.isFree) {
          const { docs } = await req.payload.find({
            collection: 'tariffs',
            where: {
              isFree: {
                equals: true,
              },
            },
            depth: 0,
          })

          for (const doc of docs) {
            if (operation === 'update' && doc.id === originalDoc?.id) continue

            await req.payload.update({
              collection: 'tariffs',
              id: doc.id,
              data: { isFree: false },
            })
          }
        }

        return data
      },
    ],
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
      name: 'isFree',
      label: 'Бесплатный',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Если включено — этот тариф будет бесплатным. Разрешён только один.',
      },
    },

    {
      name: 'subtitle',
      label: 'Подзаголовок',
      required: true,
      type: 'text',
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
