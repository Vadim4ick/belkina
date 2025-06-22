import { CollectionConfig } from 'payload'

export const Admins: CollectionConfig = {
  slug: 'admins',
  auth: true, // важно: встроенная авторизация Payload
  admin: {
    useAsTitle: 'email',
    group: {
      ru: 'Администраторы',
      en: 'Admins',
    },
    description: {
      ru: 'Управление доступом в админку',
      en: 'Admin access management',
    },
  },
  labels: {
    singular: {
      ru: 'Администратор',
      en: 'Admin',
    },
    plural: {
      ru: 'Администраторы',
      en: 'Admins',
    },
  },
  access: {
    // 🔐 Админка доступна только "admin"-ам
    admin: ({ req }) => req.user?.role === 'admin',

    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'admin',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Super Admin', value: 'super' },
      ],
    },
  ],
}
