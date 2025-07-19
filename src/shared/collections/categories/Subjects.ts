import { CacheKeys } from '@/shared/redis/cache-keys'
import { invalidateTags } from '@/shared/redis/gqlCached'
import { CollectionConfig } from 'payload'

export const Subjects: CollectionConfig = {
  slug: 'subjects',
  labels: {
    singular: 'Предмет',
    plural: 'Предметы',
  },
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [
      async () => {
        await invalidateTags(CacheKeys.tags.subjectsAll())
      },
    ],
    afterDelete: [
      async () => {
        await invalidateTags(CacheKeys.tags.subjectsAll())
      },
    ],
  },
  access: { read: () => true },
  fields: [
    {
      name: 'title',
      label: 'Название предмета',
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      label: 'Код',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Например: russian, math, social, physics' },
    },
  ],
}
