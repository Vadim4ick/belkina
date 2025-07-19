import { CacheKeys } from '@/shared/redis/cache-keys'
import { invalidateTags } from '@/shared/redis/gqlCached'
import { CollectionConfig } from 'payload'

export const Exams: CollectionConfig = {
  slug: 'exams',
  labels: {
    singular: 'Экзамен',
    plural: 'Экзамены',
  },
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [
      async () => {
        await invalidateTags(CacheKeys.tags.examsAll())
      },
    ],
    afterDelete: [
      async () => {
        await invalidateTags(CacheKeys.tags.examsAll())
      },
    ],
  },
  access: { read: () => true }, // публично или настрой как нужно
  fields: [
    {
      name: 'title',
      label: 'Название экзамена',
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      label: 'Код',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Например: oge, ege' },
    },
  ],
}
