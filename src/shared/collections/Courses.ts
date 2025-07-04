import { CollectionConfig } from 'payload'
import slugify from 'slugify'

const Courses: CollectionConfig = {
  slug: 'courses',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  labels: {
    singular: 'Курса',
    plural: 'Курсы',
  },

  hooks: {
    beforeChange: [
      async ({ data, originalDoc }) => {
        if (data.title && data.title !== originalDoc?.title) {
          data.slug = slugify(data.title, { lower: true, strict: true })
        }
        return data
      },
    ],
  },

  fields: [
    {
      name: 'title',
      label: 'Заголовок курса',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Описание',
      type: 'textarea',
      required: true,
    },
    {
      name: 'banner',
      label: 'Баннер (картинка)',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'exams',
      label: 'Экзамены',
      type: 'relationship',
      relationTo: 'exams',
      hasMany: false,
      required: true,
    },
    {
      name: 'subjects',
      label: 'Предметы',
      type: 'relationship',
      relationTo: 'subjects',
      required: true,
      hasMany: true,
    },
    {
      name: 'price',
      label: 'Цена (₽)',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
    },
    {
      name: 'discount',
      label: 'Скидка (%)',
      type: 'number',
      min: 0,
      max: 100,
      defaultValue: 0,
    },

    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },

    {
      name: 'tariff',
      label: 'Тариф',
      type: 'relationship',
      relationTo: 'tariffs',
      required: true,
    },
    {
      name: 'kinescopeVideos',
      label: 'Видео из Kinescope',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'kinescopeId',
          label: 'ID видео',
          type: 'text',
          required: true,
          admin: {
            components: {
              Field: '@/app/(payload)/components/fields/KinescopeVideoSelect',
            },
          },
        },
        {
          name: 'title',
          label: 'Название видео',
          type: 'text',
          required: true,
          admin: { readOnly: true }, // Не даём ручками менять, только через компонент
        },
        {
          name: 'duration',
          label: 'Длительность (сек)',
          type: 'number',
          required: true,
          admin: { readOnly: true },
        },
      ],
    },
  ],
}

export default Courses
