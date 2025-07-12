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
      async ({ data, req, originalDoc }) => {
        if (data.isFree) {
          const { payload } = req

          // Найдём текущие тарифы с isFree: true
          const { docs: freeTariffs } = await payload.find({
            collection: 'tariffs',
            where: {
              isFree: { equals: true },
            },
            depth: 0,
          })

          const newFreeTariffId = originalDoc?.id

          for (const doc of freeTariffs) {
            if (doc.id === newFreeTariffId) continue

            // Сбросим isFree у старого
            await payload.update({
              collection: 'tariffs',
              id: doc.id,
              data: { isFree: false },
            })

            // Переносим пользователей со старого на новый
            const { docs: usersOnOldFree } = await payload.find({
              collection: 'users',
              where: {
                tariff: { equals: doc.id },
              },
              depth: 1,
            })

            for (const user of usersOnOldFree) {
              await payload.update({
                collection: 'users',
                id: user.id,
                data: { tariff: newFreeTariffId },
              })
            }
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
