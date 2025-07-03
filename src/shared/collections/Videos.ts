import { CollectionConfig } from 'payload'

const Videos: CollectionConfig = {
  slug: 'videos',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'previewUrl', type: 'text' }, // url превью
    {
      name: 'tariff',
      type: 'relationship',
      relationTo: 'tariffs', // название твоей коллекции курсов
      required: true,
    },

    {
      name: 'kinescopeId',
      type: 'text',
      required: true,
      admin: {
        components: {
          Field: '@/app/(payload)/components/fields/KinescopeVideoSelect',
        },
      },
    },
  ],
}

export default Videos
