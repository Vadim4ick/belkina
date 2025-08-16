import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" RENAME COLUMN "seo_seo_title" TO "meta_seo_title";
  ALTER TABLE "home_page" RENAME COLUMN "seo_seo_description" TO "meta_seo_description";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" RENAME COLUMN "meta_seo_title" TO "seo_seo_title";
  ALTER TABLE "home_page" RENAME COLUMN "meta_seo_description" TO "seo_seo_description";`)
}
