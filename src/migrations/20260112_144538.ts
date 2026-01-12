import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "admins_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  DROP INDEX "home_page_main_offer_banner_options_locales_locale_parent_id_unique";
  DROP INDEX "home_page_about_project_banner_about_project_banner_media_idx";
  ALTER TABLE "admins_sessions" ADD CONSTRAINT "admins_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "admins_sessions_order_idx" ON "admins_sessions" USING btree ("_order");
  CREATE INDEX "admins_sessions_parent_id_idx" ON "admins_sessions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE UNIQUE INDEX "home_page_main_offer_banner_options_locales_locale_parent_id" ON "home_page_main_offer_banner_options_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "home_page_about_project_banner_about_project_banner_medi_idx" ON "home_page" USING btree ("about_project_banner_media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "admins_sessions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "payload_kv" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "admins_sessions" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP INDEX "home_page_main_offer_banner_options_locales_locale_parent_id";
  DROP INDEX "home_page_about_project_banner_about_project_banner_medi_idx";
  CREATE UNIQUE INDEX "home_page_main_offer_banner_options_locales_locale_parent_id_unique" ON "home_page_main_offer_banner_options_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "home_page_about_project_banner_about_project_banner_media_idx" ON "home_page" USING btree ("about_project_banner_media_id");`)
}
