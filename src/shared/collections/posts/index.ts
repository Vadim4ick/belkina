import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import {
  revalidateDelete,
  revalidatePost,
  revalidatePostsList,
  revalidatePostsListDelete,
} from './hooks/revalidatePost'

import { slugField } from '@/shared/fields/slug'
import { MediaBlock } from '@/shared/blocks/MediaBlock/config'

export const Posts: CollectionConfig<'posts'> = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  labels: {
    singular: 'Пост',
    plural: 'Посты',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Заголовк',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Описание для метатега description',
      type: 'text',
      required: true,
      maxLength: 160,
      admin: {
        description: 'Рекомендуемая длина — 120–160 символов.',
      },
    },
    {
      name: 'image',
      label: 'Изображение',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Содержание',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          BlocksFeature({ blocks: [MediaBlock] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          HorizontalRuleFeature(),
        ],
      }),
    },
    ...slugField(),
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Дата публикации',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      label: 'Категории',
      relationTo: 'exams',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedPosts',
      type: 'relationship',
      label: 'Связанные посты',
      relationTo: 'posts',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [revalidatePost, revalidatePostsList],
    afterDelete: [revalidateDelete, revalidatePostsListDelete],
  },
  versions: {
    drafts: true,
    maxPerDoc: 5,
  },
}
