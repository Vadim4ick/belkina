import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './shared/collections/Users'
import { Media } from './shared/collections/Media'
import { FAQs } from './shared/collections/FAQs'
import { HomePage } from './shared/collections/page/HomePage'
import { Tariffs } from './shared/collections/Tariffs'
import { en } from '@payloadcms/translations/languages/en'
import { ru } from '@payloadcms/translations/languages/ru'
import { Tests } from './shared/collections/test/Tests'
import { TestQuestions } from './shared/collections/test/questions'
import { TestResults } from './shared/collections/test/test-results'
import { Admins } from './shared/collections/Admins'
import { Recomendations } from './shared/collections/Recomendations'

import dotenv from 'dotenv'
import { Exams } from './shared/collections/categories/Exams'
import { Subjects } from './shared/collections/categories/Subjects'
import Courses from './shared/collections/Courses'

dotenv.config({ path: path.resolve(process.cwd(), '.env.production') })

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Admins.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  i18n: {
    fallbackLanguage: 'ru',
    supportedLanguages: { en, ru },
  },
  localization: {
    locales: ['en', 'ru'], // required
    defaultLocale: 'ru', // required
  },

  collections: [
    Users,
    Media,
    Tariffs,
    FAQs,
    Tests,
    TestQuestions,
    TestResults,
    Admins,
    Recomendations,
    Exams,
    Subjects,
    Courses,
    // Videos,
  ],
  globals: [HomePage],
  editor: lexicalEditor(),
  secret: process.env.NEXTAUTH_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  sharp,
  plugins: [payloadCloudPlugin()],
})
