import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'homePage',
  label: 'Главная страница',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Страницы',
  },
  fields: [
    {
      name: 'mainOfferBanner',
      label: 'БЕСПЛАТНЫЙ ПЕРВЫЙ ВИДЕОУРОК',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Заголовок',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          label: 'Описание',
          type: 'textarea',
          required: true,
          localized: true,
        },
        {
          name: 'label',
          label: 'Надпись',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'options',
          label: 'Пункты списка',
          type: 'array',
          required: true,
          maxRows: 3,
          labels: {
            singular: 'Пункт',
            plural: 'Пункты',
          },
          fields: [
            {
              name: 'text',
              label: 'Текст',
              type: 'text',
              localized: true,
            },
          ],
        },
      ],
    },
    {
      name: 'aboutProjectBanner',
      label: 'О проекте, с Белкиной',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Заголовок',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'subtitle',
          label: 'Подзаголовок',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          label: 'Описание',
          type: 'textarea',
          required: true,
          localized: true,
        },
      ],
    },
    {
      name: 'diagnosticTestBanner',
      label: 'с CTA',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Заголовок',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'subtitle',
          label: 'Подзаголовок',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'label',
          label: 'Надпись кнопки/лейбл',
          type: 'text',
          required: true,
          localized: true,
        },
      ],
    },
  ],
}
