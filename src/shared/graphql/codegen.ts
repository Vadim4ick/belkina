import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.production') })

const config: CodegenConfig = {
  overwrite: true, // Перезаписывать файл на каждой генерации
  schema: process.env.NEXT_PUBLIC_PAYLOAD_GRAPHQL, // или URL сервера Payload
  documents: 'src/shared/graphql/schemas/**/*.gql', // путь к .gql запросам
  generates: {
    './src/shared/graphql/__generated__.ts': {
      plugins: [
        'typescript', // генерирует типы GraphQL
        'typescript-operations', // типы для queries, mutations
        'typescript-graphql-request', // SDK с getSdk()
      ],
      config: {
        maybeValue: 'T', // делает поля типа T | null (а не T | null | undefined)
        avoidOptionals: true, // убирает ? у полей (делает их всегда обязательными)
        immutableTypes: true, // делает типы readonly (immutable)
        enumsAsTypes: true, // enum → union type (реже нужен enum runtime)
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
