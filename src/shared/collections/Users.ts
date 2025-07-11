import type { CollectionConfig } from 'payload'
import bcrypt from 'bcryptjs'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',

    group: {
      ru: 'Пользователи',
      en: 'Users',
    },
    description: {
      ru: 'Управление пользователями',
      en: 'User management',
    },
  },
  labels: {
    singular: {
      ru: 'Пользователь',
      en: 'User',
    },
    plural: {
      ru: 'Пользователи',
      en: 'Users',
    },
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
  },
  auth: false,
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'password',
      type: 'text',
      required: true,
      // access: {
      //   read: () => false, // 🔐 никто не может прочитать пароль
      // },
    },

    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      // access: {
      //   // Только админ может изменить роль
      //   update: ({ req: { user } }) => user?.role === 'admin',
      // },
    },

    /* 2. Способ регистрации --------------------------------------- */
    {
      name: 'signupMethod',
      label: 'Способ регистрации',
      type: 'select',
      required: true,
      admin: { position: 'sidebar' }, // боковая панель в админке
      defaultValue: 'email', // по умолчанию — “e-mail/пароль”
      options: [
        { label: 'Email / Password', value: 'email' },
        { label: 'Yandex OAuth', value: 'yandex' },
        { label: 'Google OAuth', value: 'google' },
      ],
      /* менять поле может только админ; читать — кто угодно */
      access: {
        update: ({ req: { user } }) => user?.role === 'admin',
      },
    },

    {
      name: 'tariff',
      label: 'Тариф',
      type: 'relationship',
      relationTo: 'tariffs',
      required: false,
      defaultValue: async ({ req }) => {
        const { docs } = await req.payload.find({
          collection: 'tariffs',
          sort: 'createdAt',
        })

        return docs.find((doc) => doc.isFree)?.id
      },
      admin: {
        position: 'sidebar',
      },
    },
  ],

  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        if ((operation === 'create' || operation === 'update') && data.password) {
          data.password = await bcrypt.hash(data.password, 10)
        }
        return data
      },
    ],
  },
}
