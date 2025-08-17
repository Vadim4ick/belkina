import { type MigrateUpArgs, type MigrateDownArgs } from '@payloadcms/db-postgres'

export async function up({}: MigrateUpArgs): Promise<void> {
  // noop: база уже создана через dev-push
}

export async function down({}: MigrateDownArgs): Promise<void> {
  // noop
}
