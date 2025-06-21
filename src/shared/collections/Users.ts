import type { CollectionConfig } from 'payload'

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
    // 🔐 Админка доступна только "admin"-ам
    admin: ({ req }) => req.user?.role === 'admin',

    read: () => true,
    create: () => true,
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
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
      required: true,
      defaultValue: async ({ req }) => {
        const { docs } = await req.payload.find({
          collection: 'tariffs',
          limit: 1,
          sort: 'createdAt',
        })
        return docs[0]?.id // первый созданный тариф по умолчанию
      },
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
