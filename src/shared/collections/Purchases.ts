import { CollectionConfig } from 'payload'
import { invalidateTags } from '../redis/gqlCached'
import { CacheKeys } from '../redis/cache-keys'
import { getServerAuthGqlClient } from '../actions/getServerAuthGqlClient'

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
    // beforeChange: [
    //   async ({ data, operation }) => {
    //     if (operation === 'create') {
    //       const now = new Date()
    //       now.setMinutes(now.getMinutes() + 2)
    //       data.expiresAt = now
    //     }
    //     return data
    //   },
    // ],

    afterChange: [
      async ({ doc, previousDoc, operation }) => {
        const gql = await getServerAuthGqlClient({})

        const newUserId = doc?.user
        const prevUserId = previousDoc?.user

        const courseId = doc?.course
        const prevCourseId = previousDoc?.course

        // Set для устранения дубликатов
        const tags = new Set<string>()

        await gql
          .GetCourseSlugById({
            id: courseId || prevCourseId,
          })
          .then((res) => {
            tags.add(CacheKeys.tags.courseBySlug({ slug: res?.Course?.slug }))
          })

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

        await invalidateTags(
          CacheKeys.tags.courseBySlug({
            slug: doc?.course?.slug,
          }),
        )

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
      name: 'status',
      label: 'Статус',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Активна', value: 'active' },
        { label: 'Неактивна', value: 'inactive' },
      ],
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
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },

    {
      name: 'expiresAt',
      label: 'Дата истечения',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}

export default Purchases
