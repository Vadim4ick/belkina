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
import { Tariffs } from './shared/collections/tariffs/Tariffs'
import { en } from '@payloadcms/translations/languages/en'
import { ru } from '@payloadcms/translations/languages/ru'
import { Tests } from './shared/collections/test/Tests'
import { TestQuestions } from './shared/collections/test/questions'
import { TestResults } from './shared/collections/test/test-results'
import { Admins } from './shared/collections/Admins'
import { Recomendations } from './shared/collections/Recomendations'
import { Webinars } from './shared/collections/Webinars'
import Purchases from './shared/collections/Purchases'

import dotenv from 'dotenv'
import { Posts } from './shared/collections/posts'
import { Exams } from './shared/collections/categories/Exams'
import { Subjects } from './shared/collections/categories/Subjects'
import Courses from './shared/collections/Courses'
import { GetUserTestsResolver } from './shared/graphql/resolvers/GetUserTestsResolver'
import { GetUserRecommendationsResolver } from './shared/graphql/resolvers/GetUserRecommendations'

dotenv.config()

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
    Purchases,
    Posts,
    Courses,
    Webinars,
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

  graphQL: {
    queries: (GraphQL) => {
      const TestWithStatusType = new GraphQL.GraphQLObjectType({
        name: 'TestWithStatus',
        fields: {
          id: { type: GraphQL.GraphQLID },
          title: { type: GraphQL.GraphQLString },
          description: { type: GraphQL.GraphQLString },
          status: { type: GraphQL.GraphQLString },
        },
      })

      const PaginatedTestsWithStatusType = new GraphQL.GraphQLObjectType({
        name: 'PaginatedTestsWithStatus',
        fields: {
          docs: { type: new GraphQL.GraphQLList(TestWithStatusType) },
          page: { type: GraphQL.GraphQLInt },
          totalPages: { type: GraphQL.GraphQLInt },
          totalDocs: { type: GraphQL.GraphQLInt },
        },
      })

      const TestResultStatusEnum = new GraphQL.GraphQLEnumType({
        name: 'TestResult_Status_ALL',
        values: {
          completed: { value: 'completed' },
          in_progress: { value: 'in_progress' },
          not_started: { value: 'not_started' },
        },
      })

      const RecommendationType = new GraphQL.GraphQLObjectType({
        name: 'Recommendation',
        fields: {
          id: { type: GraphQL.GraphQLID },
          title: { type: GraphQL.GraphQLString },
          description: { type: GraphQL.GraphQLString },
        },
      })

      return {
        GetUserTests: {
          type: PaginatedTestsWithStatusType,
          args: {
            userId: { type: GraphQL.GraphQLInt },
            page: { type: GraphQL.GraphQLInt },
            limit: { type: GraphQL.GraphQLInt },
            // testIds: {
            //   type: new GraphQL.GraphQLNonNull(
            //     new GraphQL.GraphQLList(new GraphQL.GraphQLNonNull(GraphQL.GraphQLInt)),
            //   ),
            // },
            status: { type: TestResultStatusEnum },
            examId: { type: GraphQL.GraphQLInt },
            subjectId: { type: GraphQL.GraphQLInt }, // множественный, опциональный
          },
          resolve: GetUserTestsResolver.resolve,
        },

        GetUserRecommendations: {
          type: new GraphQL.GraphQLList(RecommendationType),
          args: {
            userId: { type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLInt) },
          },
          resolve: GetUserRecommendationsResolver.resolve,
        },
      }
    },
  },
})
