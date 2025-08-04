import { CacheKeys } from '@/shared/redis/cache-keys'
import { invalidateTags } from '@/shared/redis/gqlCached'
import { CollectionConfig } from 'payload'

export const TestResults: CollectionConfig = {
  slug: 'testResults',
  admin: {
    useAsTitle: 'id',
    group: 'Результаты',
  },
  labels: {
    singular: 'Резултат теста',
    plural: 'Результаты тестов',
  },
  hooks: {
    /**
     * Создание / обновление
     */
    afterChange: [
      async ({ doc, previousDoc, operation }) => {
        try {
          const userId = doc?.user
          if (!userId) return

          // create: инвалидируем всегда
          if (operation === 'create') {
            await invalidateTags(CacheKeys.tags.testHistory(userId))
            return
          }

          // update: сравниваем статус
          if (operation === 'update') {
            const prevStatus = previousDoc?.status
            const newStatus = doc?.status

            if (prevStatus !== newStatus) {
              await invalidateTags(CacheKeys.tags.testHistory(userId))
            }
          }
        } catch (e) {
          console.warn('[TestResults.afterChange] invalidate failed', e)
        }
      },
    ],

    /**
     * Удаление
     */
    afterDelete: [
      async ({ doc }) => {
        if (doc?.user?.id == null) return

        try {
          const userId = doc?.user?.id
          if (!userId) return

          await invalidateTags(CacheKeys.tags.testHistory(userId))
        } catch (e) {
          console.warn('[TestResults.afterDelete] invalidate failed', e)
        }
      },
    ],
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'user',
      label: 'Пользователь',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'test',
      label: 'Тест',
      type: 'relationship',
      relationTo: 'tests',
      required: true,
    },
    {
      name: 'status',
      label: 'Статус',
      type: 'select',
      required: true,
      defaultValue: 'in_progress',
      options: [
        { label: 'Завершён', value: 'completed' },
        { label: 'В процессе', value: 'in_progress' },
      ],
    },
    {
      name: 'answers',
      label: 'Ответы пользователя',
      type: 'array',
      fields: [
        {
          name: 'question',
          label: 'Вопрос',
          type: 'relationship',
          relationTo: 'questions',
          required: true,
        },
        {
          name: 'userAnswer',
          label: 'Ответ пользователя',
          type: 'json', // для поддержки разных типов: строка, массив, объект
          required: true,
        },
        {
          name: 'isCorrect',
          label: 'Правильный ответ?',
          type: 'checkbox',
        },
      ],
    },
    // {
    //   name: 'score',
    //   label: 'Процент правильных ответов',
    //   type: 'number',
    //   min: 0,
    //   max: 100,
    // },
  ],
}
