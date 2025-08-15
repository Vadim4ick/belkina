import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" ADD COLUMN "about_project_banner_desc" jsonb;
  ALTER TABLE "home_page" DROP COLUMN "about_project_banner_content";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" RENAME COLUMN "about_project_banner_desc" TO "about_project_banner_content";`)
}
