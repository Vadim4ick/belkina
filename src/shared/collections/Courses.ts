import { CollectionConfig, FieldHook } from 'payload'
import slugify from 'slugify'
import { summClockTime } from '../lib/utils'
import { KinescopeVideo, KinescopeVideoItem } from '../types/kinescope.types'
import { JwtService } from '../services/jwt-service'
import { getServerAuthGqlClient } from '../actions/getServerAuthGqlClient'
import { invalidateTags } from '../redis/gqlCached'
import { CacheKeys } from '../redis/cache-keys'

const filterVideos: FieldHook = async ({ value, req, data }) => {
  const gql = await getServerAuthGqlClient({})

  // 1) Админ видит всё
  if (req.user?.role === 'admin') return value
  if (data?.isFree) return value

  const authHeader = req?.headers?.get('authorization')
  const token = authHeader?.replace(/^Bearer\s/, '')

  if (!token) {
    return (value as KinescopeVideoItem[]).map((v, i) =>
      i === 0 ? v : { ...v, kinescopeId: undefined },
    )
  }

  try {
    const { id } = await JwtService.verifyToken(token)

    // console.log('✅ Токен валиден')

    const purchase = await gql.GetPurchaseById({
      courseId: data?.id,
      userId: id,
    })

    if (purchase.Purchases.docs?.[0]?.id) {
      // console.log('✅ Вы купили этот курс')
      return value
    } else {
      // console.warn('⚠️ Вы не купили этот курс')
      return (value as KinescopeVideoItem[]).map((v, i) =>
        i === 0 ? v : { ...v, kinescopeId: undefined },
      )
    }
  } catch (err) {
    console.warn('⚠️ Токен невалиден:', (err as Error)?.message)
    return (value as KinescopeVideoItem[]).map((v, i) =>
      i === 0 ? v : { ...v, kinescopeId: undefined },
    )
  }
}

const Courses: CollectionConfig = {
  slug: 'courses',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  labels: {
    singular: 'Курса',
    plural: 'Курсы',
  },

  hooks: {
    afterChange: [
      async ({ doc, operation, previousDoc }) => {
        if (operation === 'create') {
          await invalidateTags(
            CacheKeys.tags.courseBySlug({
              slug: doc?.slug,
            }),
          )
        } else {
          await invalidateTags(
            CacheKeys.tags.courseBySlug({
              slug: previousDoc?.slug,
            }),
          )
        }

        await invalidateTags(CacheKeys.tags.purchasesAll())
      },
    ],

    afterDelete: [
      async ({ doc }) => {
        await invalidateTags(CacheKeys.tags.purchasesAll())
        await invalidateTags(
          CacheKeys.tags.courseBySlug({
            slug: doc?.slug,
          }),
        )
      },
    ],

    beforeChange: [
      async ({ data, originalDoc }) => {
        if (data.title && data.title !== originalDoc?.title) {
          data.slug = slugify(data.title, { lower: true, strict: true })
        }

        const total = summClockTime(
          data.kinescopeVideos?.map((video: KinescopeVideo) => video.duration) || [],
        )

        const preview = data.kinescopeVideos?.[0]?.kinescopeId || ''

        data.totalDuration = total
        data.previewVideoId = preview

        return data
      },
    ],

    beforeDelete: [
      async ({ id, req }) => {
        try {
          // находим все покупки этого курса
          // Если много покупок – можно пагинировать; здесь простой случай
          const purchases = await req.payload.find({
            collection: 'purchases',
            where: { course: { equals: id } },
            depth: 0,
            limit: 1000, // при необходимости увеличить/цикл
          })

          if (purchases?.docs?.length) {
            for (const p of purchases.docs) {
              await req.payload.delete({
                collection: 'purchases',
                id: p.id,
              })
            }
            if (process.env.NODE_ENV !== 'production') {
              console.log(
                `[cascade delete] удалены покупки курса ${id}:`,
                purchases.docs.map((d) => d.id),
              )
            }
          }
        } catch (err) {
          console.error('[cascade delete purchases error]', err)
          // Можно кинуть ошибку, чтобы прервать удаление курса:
          // throw new Error('Не удалось удалить связанные покупки')
        }
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
      name: 'previewVideoId',
      type: 'text',
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'totalDuration',
      type: 'text',
      admin: { position: 'sidebar', readOnly: true },
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

      hooks: { afterRead: [filterVideos] },

      admin: {
        components: {
          Field: '@/app/(payload)/components/fields/KinescopeVideoSelect',
        },
      },
    },
  ],
}

export default Courses
