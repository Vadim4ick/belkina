import { CacheKeys } from '@/shared/redis/cache-keys'
import { invalidateTags } from '@/shared/redis/gqlCached'
import { CollectionConfig } from 'payload'

export const Tests: CollectionConfig = {
  slug: 'tests',
  labels: {
    singular: 'Тест',
    plural: 'Тесты',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Тестирование',
  },

  hooks: {
    afterChange: [
      async ({ doc }) => {
        try {
          const tags = new Set<string>()

          if (doc?.id) {
            tags.add(CacheKeys.tags.testById(doc.id))
          }

          await invalidateTags(...Array.from(tags))
        } catch (e) {
          console.warn('[tests.afterChange] cache invalidate failed', e)
        }
      },
    ],

    afterDelete: [
      async ({ doc, id }) => {
        try {
          const tags = new Set<string>()

          const testId = doc?.id || id

          if (testId) {
            tags.add(CacheKeys.tags.testById(testId))
          }

          await invalidateTags(...Array.from(tags))
        } catch (e) {
          console.warn('[tests.afterDelete] cache invalidate failed', e)
        }
      },
    ],

    beforeDelete: [
      async ({ id, req }) => {
        const { payload } = req

        console.log(`Удаляем testResults для теста ${id}`)

        const { docs } = await payload.find({
          collection: 'testResults',
          where: {
            test: { equals: id },
          },
        })

        for (const result of docs) {
          await payload.delete({
            collection: 'testResults',
            id: result.id,
          })
        }
      },
    ],
  },

  access: {
    read: async () => {
      // 1. Если админ или API-токен — разрешить (переиспользуем checkAccessToken)
      // if (await checkAccessToken({ req })) return true

      // 2. Если тариф не базовый — доступ только с токеном
      return true
    },
  },
  fields: [
    {
      name: 'title',
      label: 'Название теста',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      label: 'Описание',
      type: 'textarea',
    },
    {
      name: 'questions',
      label: 'Вопросы',
      type: 'relationship',
      relationTo: 'questions',
      hasMany: true,
    },

    // 🔷 новое поле exams
    {
      name: 'exam',
      label: 'Экзамен',
      type: 'relationship',
      relationTo: 'exams',
      required: false,
      hasMany: false,
      admin: { position: 'sidebar' },
    },

    // 🔷 новое поле subjects
    {
      name: 'subjects',
      label: 'Предметы',
      type: 'relationship',
      relationTo: 'subjects',
      required: false,
      hasMany: true,
      admin: { position: 'sidebar' },
    },
  ],
}
