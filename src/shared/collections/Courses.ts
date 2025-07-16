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
      required: false,
      hasMany: false,
    },
    {
      name: 'subjects',
      label: 'Предметы',
      type: 'relationship',
      relationTo: 'subjects',
      required: false,
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
      name: 'isFree',
      label: 'Бесплатный материал',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'kinescopeVideos',
      label: 'Видео из Kinescope',
      type: 'json',
      required: true,
      admin: {
        components: {
          Field: '@/app/(payload)/components/fields/KinescopeVideoSelect',
        },
      },
    },
  ],
}

export default Courses
