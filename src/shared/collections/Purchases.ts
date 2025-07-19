import { CollectionConfig } from 'payload'
import { invalidateTags } from '../redis/gqlCached'
import { CacheKeys } from '../redis/cache-keys'

const Purchases: CollectionConfig = {
  slug: 'purchases',

  admin: {
    useAsTitle: 'id',
    group: 'Результаты',
  },
  labels: {
    singular: 'Покупка',
    plural: 'Покупки',
  },

  access: {
    read: () => true,
    create: () => true,
  },

  hooks: {
    afterChange: [
      async ({ doc, previousDoc, operation }) => {
        const newUserId = doc?.user
        const prevUserId = previousDoc?.user

        // Set для устранения дубликатов
        const tags = new Set<string>()

        await invalidateTags(CacheKeys.tags.courseBySlug())

        if (operation === 'create') {
          if (newUserId != null) tags.add(CacheKeys.tags.purchasesByUser(newUserId))
        } else {
          if (newUserId != null) tags.add(CacheKeys.tags.purchasesByUser(newUserId))
          if (prevUserId != null && prevUserId !== newUserId) {
            tags.add(CacheKeys.tags.purchasesByUser(prevUserId))
          }
        }

        if (tags.size) {
          await invalidateTags(...Array.from(tags))
        }

        if (process.env.NODE_ENV !== 'production') {
          console.log('[invalidate purchases afterChange]', {
            op: operation,
            newUserId,
            prevUserId,
            tags: Array.from(tags),
          })
        }
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        const userId = doc?.user?.id

        await invalidateTags(CacheKeys.tags.courseBySlug())

        if (userId != null) {
          await invalidateTags(CacheKeys.tags.purchasesByUser(userId))
        }

        if (process.env.NODE_ENV !== 'production') {
          console.log('[invalidate purchases afterDelete]', { userId, id: doc?.id })
        }
      },
    ],
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
      name: 'course',
      label: 'Курс',
      type: 'relationship',
      relationTo: 'courses',
      required: true,
    },
    {
      name: 'tariff',
      label: 'Тариф',
      type: 'relationship',
      relationTo: 'tariffs',
      required: true,
    },
    {
      name: 'pricePaid',
      label: 'Цена оплаты',
      type: 'number',
      required: true,
    },
    {
      name: 'purchasedAt',
      label: 'Дата покупки',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
}

export default Purchases
