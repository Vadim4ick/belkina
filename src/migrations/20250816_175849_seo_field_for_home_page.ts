import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" ADD COLUMN "seo_seo_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "seo_seo_description" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" DROP COLUMN "seo_seo_title";
  ALTER TABLE "home_page" DROP COLUMN "seo_seo_description";`)
}
