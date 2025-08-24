import type { GlobalConfig } from 'payload'

export const MailSend: GlobalConfig = {
  slug: 'mail-send',

  label: 'Рассылка',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'subject',
      label: 'Тема письма',
      type: 'text',
      required: true,
    },

    {
      name: 'content',
      type: 'richText',
      label: 'Текст письма',
      required: true,
    },
  ],
}
