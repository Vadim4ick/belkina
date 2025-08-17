import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'ru');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'user');
  CREATE TYPE "public"."enum_users_signup_method" AS ENUM('email', 'yandex', 'google');
  CREATE TYPE "public"."enum_questions_question_type" AS ENUM('single_choice', 'multiple_choice', 'matching', 'text_input');
  CREATE TYPE "public"."enum_test_results_status" AS ENUM('completed', 'in_progress');
  CREATE TYPE "public"."enum_admins_role" AS ENUM('admin', 'super');
  CREATE TYPE "public"."enum_purchases_status" AS ENUM('active', 'inactive');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('en', 'ru');
  CREATE TYPE "public"."enum_webinars_type" AS ENUM('minigroup', 'exam_practice', 'free', 'individual');
  CREATE TYPE "public"."enum_webinar_payments_status" AS ENUM('pending', 'waiting_for_capture', 'succeeded', 'canceled', 'refunded');
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"is_verified" boolean DEFAULT false,
  	"password" varchar NOT NULL,
  	"name" varchar,
  	"avatar_id" integer,
  	"role" "enum_users_role" DEFAULT 'user' NOT NULL,
  	"signup_method" "enum_users_signup_method" DEFAULT 'email' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "tariffs_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "tariffs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"price" numeric NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "tests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"exam_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "tests_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"questions_id" integer,
  	"subjects_id" integer
  );
  
  CREATE TABLE "questions_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"is_correct" boolean
  );
  
  CREATE TABLE "questions_matching_pairs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left" varchar,
  	"right" varchar
  );
  
  CREATE TABLE "questions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question_text" varchar NOT NULL,
  	"question_type" "enum_questions_question_type" NOT NULL,
  	"text_answer" varchar,
  	"recommendation_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "test_results_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question_id" integer NOT NULL,
  	"user_answer" jsonb NOT NULL,
  	"is_correct" boolean
  );
  
  CREATE TABLE "test_results" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id" integer NOT NULL,
  	"test_id" integer NOT NULL,
  	"status" "enum_test_results_status" DEFAULT 'in_progress' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "admins" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"role" "enum_admins_role" DEFAULT 'admin' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "recomendations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "exams" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"code" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "subjects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"code" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "purchases" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id" integer NOT NULL,
  	"status" "enum_purchases_status" DEFAULT 'active',
  	"course_id" integer NOT NULL,
  	"tariff_id" integer NOT NULL,
  	"price_paid" numeric NOT NULL,
  	"purchased_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"content" jsonb,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"exams_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" varchar,
  	"version_image_id" integer,
  	"version_content" jsonb,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__posts_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"exams_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "courses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"banner_id" integer NOT NULL,
  	"exams_id" integer,
  	"price" numeric DEFAULT 0 NOT NULL,
  	"discount" numeric DEFAULT 0,
  	"preview_video_id" varchar,
  	"total_duration" varchar,
  	"slug" varchar NOT NULL,
  	"is_free" boolean DEFAULT false,
  	"kinescope_videos" jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "courses_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"subjects_id" integer
  );
  
  CREATE TABLE "webinars" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"type" "enum_webinars_type" DEFAULT 'free' NOT NULL,
  	"max_participants" numeric,
  	"starts_at" timestamp(3) with time zone NOT NULL,
  	"end_at" timestamp(3) with time zone NOT NULL,
  	"url" varchar NOT NULL,
  	"price" numeric,
  	"content" jsonb NOT NULL,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "webinar_payments" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id" integer NOT NULL,
  	"webinar_id" integer NOT NULL,
  	"payment_id" varchar NOT NULL,
  	"amount" numeric NOT NULL,
  	"currency" varchar DEFAULT 'RUB',
  	"status" "enum_webinar_payments_status" DEFAULT 'pending' NOT NULL,
  	"metadata" jsonb,
  	"failure_code" varchar,
  	"failure_message" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"tariffs_id" integer,
  	"faqs_id" integer,
  	"tests_id" integer,
  	"questions_id" integer,
  	"test_results_id" integer,
  	"admins_id" integer,
  	"recomendations_id" integer,
  	"exams_id" integer,
  	"subjects_id" integer,
  	"purchases_id" integer,
  	"posts_id" integer,
  	"courses_id" integer,
  	"webinars_id" integer,
  	"webinar_payments_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"admins_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_page_main_offer_banner_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "home_page_main_offer_banner_options_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "home_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_seo_title" varchar,
  	"meta_seo_description" varchar,
  	"featured_test_id" integer,
  	"about_project_banner_description" jsonb,
  	"about_project_banner_media_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_page_locales" (
  	"main_offer_banner_title" varchar NOT NULL,
  	"main_offer_banner_description" varchar NOT NULL,
  	"main_offer_banner_label" varchar NOT NULL,
  	"about_project_banner_title" varchar NOT NULL,
  	"about_project_banner_subtitle" varchar NOT NULL,
  	"diagnostic_test_banner_title" varchar NOT NULL,
  	"diagnostic_test_banner_subtitle" varchar NOT NULL,
  	"diagnostic_test_banner_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tariffs_benefits" ADD CONSTRAINT "tariffs_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tariffs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tests" ADD CONSTRAINT "tests_exam_id_exams_id_fk" FOREIGN KEY ("exam_id") REFERENCES "public"."exams"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tests_rels" ADD CONSTRAINT "tests_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."tests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tests_rels" ADD CONSTRAINT "tests_rels_questions_fk" FOREIGN KEY ("questions_id") REFERENCES "public"."questions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tests_rels" ADD CONSTRAINT "tests_rels_subjects_fk" FOREIGN KEY ("subjects_id") REFERENCES "public"."subjects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "questions_answers" ADD CONSTRAINT "questions_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."questions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "questions_matching_pairs" ADD CONSTRAINT "questions_matching_pairs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."questions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "questions" ADD CONSTRAINT "questions_recommendation_id_recomendations_id_fk" FOREIGN KEY ("recommendation_id") REFERENCES "public"."recomendations"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "test_results_answers" ADD CONSTRAINT "test_results_answers_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "test_results_answers" ADD CONSTRAINT "test_results_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."test_results"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "test_results" ADD CONSTRAINT "test_results_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "test_results" ADD CONSTRAINT "test_results_test_id_tests_id_fk" FOREIGN KEY ("test_id") REFERENCES "public"."tests"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "purchases" ADD CONSTRAINT "purchases_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "purchases" ADD CONSTRAINT "purchases_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "purchases" ADD CONSTRAINT "purchases_tariff_id_tariffs_id_fk" FOREIGN KEY ("tariff_id") REFERENCES "public"."tariffs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_exams_fk" FOREIGN KEY ("exams_id") REFERENCES "public"."exams"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_exams_fk" FOREIGN KEY ("exams_id") REFERENCES "public"."exams"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses" ADD CONSTRAINT "courses_banner_id_media_id_fk" FOREIGN KEY ("banner_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses" ADD CONSTRAINT "courses_exams_id_exams_id_fk" FOREIGN KEY ("exams_id") REFERENCES "public"."exams"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_subjects_fk" FOREIGN KEY ("subjects_id") REFERENCES "public"."subjects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_payments" ADD CONSTRAINT "webinar_payments_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "webinar_payments" ADD CONSTRAINT "webinar_payments_webinar_id_webinars_id_fk" FOREIGN KEY ("webinar_id") REFERENCES "public"."webinars"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tariffs_fk" FOREIGN KEY ("tariffs_id") REFERENCES "public"."tariffs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tests_fk" FOREIGN KEY ("tests_id") REFERENCES "public"."tests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_questions_fk" FOREIGN KEY ("questions_id") REFERENCES "public"."questions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_test_results_fk" FOREIGN KEY ("test_results_id") REFERENCES "public"."test_results"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_admins_fk" FOREIGN KEY ("admins_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_recomendations_fk" FOREIGN KEY ("recomendations_id") REFERENCES "public"."recomendations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_exams_fk" FOREIGN KEY ("exams_id") REFERENCES "public"."exams"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_subjects_fk" FOREIGN KEY ("subjects_id") REFERENCES "public"."subjects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_purchases_fk" FOREIGN KEY ("purchases_id") REFERENCES "public"."purchases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_webinars_fk" FOREIGN KEY ("webinars_id") REFERENCES "public"."webinars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_webinar_payments_fk" FOREIGN KEY ("webinar_payments_id") REFERENCES "public"."webinar_payments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_admins_fk" FOREIGN KEY ("admins_id") REFERENCES "public"."admins"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_main_offer_banner_options" ADD CONSTRAINT "home_page_main_offer_banner_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_main_offer_banner_options_locales" ADD CONSTRAINT "home_page_main_offer_banner_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_main_offer_banner_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_featured_test_id_tests_id_fk" FOREIGN KEY ("featured_test_id") REFERENCES "public"."tests"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_about_project_banner_media_id_media_id_fk" FOREIGN KEY ("about_project_banner_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_locales" ADD CONSTRAINT "home_page_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "tariffs_benefits_order_idx" ON "tariffs_benefits" USING btree ("_order");
  CREATE INDEX "tariffs_benefits_parent_id_idx" ON "tariffs_benefits" USING btree ("_parent_id");
  CREATE INDEX "tariffs_updated_at_idx" ON "tariffs" USING btree ("updated_at");
  CREATE INDEX "tariffs_created_at_idx" ON "tariffs" USING btree ("created_at");
  CREATE INDEX "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE INDEX "tests_exam_idx" ON "tests" USING btree ("exam_id");
  CREATE INDEX "tests_updated_at_idx" ON "tests" USING btree ("updated_at");
  CREATE INDEX "tests_created_at_idx" ON "tests" USING btree ("created_at");
  CREATE INDEX "tests_rels_order_idx" ON "tests_rels" USING btree ("order");
  CREATE INDEX "tests_rels_parent_idx" ON "tests_rels" USING btree ("parent_id");
  CREATE INDEX "tests_rels_path_idx" ON "tests_rels" USING btree ("path");
  CREATE INDEX "tests_rels_questions_id_idx" ON "tests_rels" USING btree ("questions_id");
  CREATE INDEX "tests_rels_subjects_id_idx" ON "tests_rels" USING btree ("subjects_id");
  CREATE INDEX "questions_answers_order_idx" ON "questions_answers" USING btree ("_order");
  CREATE INDEX "questions_answers_parent_id_idx" ON "questions_answers" USING btree ("_parent_id");
  CREATE INDEX "questions_matching_pairs_order_idx" ON "questions_matching_pairs" USING btree ("_order");
  CREATE INDEX "questions_matching_pairs_parent_id_idx" ON "questions_matching_pairs" USING btree ("_parent_id");
  CREATE INDEX "questions_recommendation_idx" ON "questions" USING btree ("recommendation_id");
  CREATE INDEX "questions_updated_at_idx" ON "questions" USING btree ("updated_at");
  CREATE INDEX "questions_created_at_idx" ON "questions" USING btree ("created_at");
  CREATE INDEX "test_results_answers_order_idx" ON "test_results_answers" USING btree ("_order");
  CREATE INDEX "test_results_answers_parent_id_idx" ON "test_results_answers" USING btree ("_parent_id");
  CREATE INDEX "test_results_answers_question_idx" ON "test_results_answers" USING btree ("question_id");
  CREATE INDEX "test_results_user_idx" ON "test_results" USING btree ("user_id");
  CREATE INDEX "test_results_test_idx" ON "test_results" USING btree ("test_id");
  CREATE INDEX "test_results_updated_at_idx" ON "test_results" USING btree ("updated_at");
  CREATE INDEX "test_results_created_at_idx" ON "test_results" USING btree ("created_at");
  CREATE INDEX "admins_updated_at_idx" ON "admins" USING btree ("updated_at");
  CREATE INDEX "admins_created_at_idx" ON "admins" USING btree ("created_at");
  CREATE UNIQUE INDEX "admins_email_idx" ON "admins" USING btree ("email");
  CREATE INDEX "recomendations_updated_at_idx" ON "recomendations" USING btree ("updated_at");
  CREATE INDEX "recomendations_created_at_idx" ON "recomendations" USING btree ("created_at");
  CREATE UNIQUE INDEX "exams_code_idx" ON "exams" USING btree ("code");
  CREATE INDEX "exams_updated_at_idx" ON "exams" USING btree ("updated_at");
  CREATE INDEX "exams_created_at_idx" ON "exams" USING btree ("created_at");
  CREATE UNIQUE INDEX "subjects_code_idx" ON "subjects" USING btree ("code");
  CREATE INDEX "subjects_updated_at_idx" ON "subjects" USING btree ("updated_at");
  CREATE INDEX "subjects_created_at_idx" ON "subjects" USING btree ("created_at");
  CREATE INDEX "purchases_user_idx" ON "purchases" USING btree ("user_id");
  CREATE INDEX "purchases_course_idx" ON "purchases" USING btree ("course_id");
  CREATE INDEX "purchases_tariff_idx" ON "purchases" USING btree ("tariff_id");
  CREATE INDEX "purchases_updated_at_idx" ON "purchases" USING btree ("updated_at");
  CREATE INDEX "purchases_created_at_idx" ON "purchases" USING btree ("created_at");
  CREATE INDEX "posts_image_idx" ON "posts" USING btree ("image_id");
  CREATE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_exams_id_idx" ON "posts_rels" USING btree ("exams_id");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_image_idx" ON "_posts_v" USING btree ("version_image_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_exams_id_idx" ON "_posts_v_rels" USING btree ("exams_id");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX "courses_banner_idx" ON "courses" USING btree ("banner_id");
  CREATE INDEX "courses_exams_idx" ON "courses" USING btree ("exams_id");
  CREATE UNIQUE INDEX "courses_slug_idx" ON "courses" USING btree ("slug");
  CREATE INDEX "courses_updated_at_idx" ON "courses" USING btree ("updated_at");
  CREATE INDEX "courses_created_at_idx" ON "courses" USING btree ("created_at");
  CREATE INDEX "courses_rels_order_idx" ON "courses_rels" USING btree ("order");
  CREATE INDEX "courses_rels_parent_idx" ON "courses_rels" USING btree ("parent_id");
  CREATE INDEX "courses_rels_path_idx" ON "courses_rels" USING btree ("path");
  CREATE INDEX "courses_rels_subjects_id_idx" ON "courses_rels" USING btree ("subjects_id");
  CREATE UNIQUE INDEX "webinars_slug_idx" ON "webinars" USING btree ("slug");
  CREATE INDEX "webinars_updated_at_idx" ON "webinars" USING btree ("updated_at");
  CREATE INDEX "webinars_created_at_idx" ON "webinars" USING btree ("created_at");
  CREATE INDEX "webinar_payments_user_idx" ON "webinar_payments" USING btree ("user_id");
  CREATE INDEX "webinar_payments_webinar_idx" ON "webinar_payments" USING btree ("webinar_id");
  CREATE UNIQUE INDEX "webinar_payments_payment_id_idx" ON "webinar_payments" USING btree ("payment_id");
  CREATE INDEX "webinar_payments_status_idx" ON "webinar_payments" USING btree ("status");
  CREATE INDEX "webinar_payments_updated_at_idx" ON "webinar_payments" USING btree ("updated_at");
  CREATE INDEX "webinar_payments_created_at_idx" ON "webinar_payments" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_tariffs_id_idx" ON "payload_locked_documents_rels" USING btree ("tariffs_id");
  CREATE INDEX "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX "payload_locked_documents_rels_tests_id_idx" ON "payload_locked_documents_rels" USING btree ("tests_id");
  CREATE INDEX "payload_locked_documents_rels_questions_id_idx" ON "payload_locked_documents_rels" USING btree ("questions_id");
  CREATE INDEX "payload_locked_documents_rels_test_results_id_idx" ON "payload_locked_documents_rels" USING btree ("test_results_id");
  CREATE INDEX "payload_locked_documents_rels_admins_id_idx" ON "payload_locked_documents_rels" USING btree ("admins_id");
  CREATE INDEX "payload_locked_documents_rels_recomendations_id_idx" ON "payload_locked_documents_rels" USING btree ("recomendations_id");
  CREATE INDEX "payload_locked_documents_rels_exams_id_idx" ON "payload_locked_documents_rels" USING btree ("exams_id");
  CREATE INDEX "payload_locked_documents_rels_subjects_id_idx" ON "payload_locked_documents_rels" USING btree ("subjects_id");
  CREATE INDEX "payload_locked_documents_rels_purchases_id_idx" ON "payload_locked_documents_rels" USING btree ("purchases_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_courses_id_idx" ON "payload_locked_documents_rels" USING btree ("courses_id");
  CREATE INDEX "payload_locked_documents_rels_webinars_id_idx" ON "payload_locked_documents_rels" USING btree ("webinars_id");
  CREATE INDEX "payload_locked_documents_rels_webinar_payments_id_idx" ON "payload_locked_documents_rels" USING btree ("webinar_payments_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_admins_id_idx" ON "payload_preferences_rels" USING btree ("admins_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "home_page_main_offer_banner_options_order_idx" ON "home_page_main_offer_banner_options" USING btree ("_order");
  CREATE INDEX "home_page_main_offer_banner_options_parent_id_idx" ON "home_page_main_offer_banner_options" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "home_page_main_offer_banner_options_locales_locale_parent_id_unique" ON "home_page_main_offer_banner_options_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "home_page_featured_test_idx" ON "home_page" USING btree ("featured_test_id");
  CREATE INDEX "home_page_about_project_banner_about_project_banner_media_idx" ON "home_page" USING btree ("about_project_banner_media_id");
  CREATE UNIQUE INDEX "home_page_locales_locale_parent_id_unique" ON "home_page_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "tariffs_benefits" CASCADE;
  DROP TABLE "tariffs" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "tests" CASCADE;
  DROP TABLE "tests_rels" CASCADE;
  DROP TABLE "questions_answers" CASCADE;
  DROP TABLE "questions_matching_pairs" CASCADE;
  DROP TABLE "questions" CASCADE;
  DROP TABLE "test_results_answers" CASCADE;
  DROP TABLE "test_results" CASCADE;
  DROP TABLE "admins" CASCADE;
  DROP TABLE "recomendations" CASCADE;
  DROP TABLE "exams" CASCADE;
  DROP TABLE "subjects" CASCADE;
  DROP TABLE "purchases" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "courses" CASCADE;
  DROP TABLE "courses_rels" CASCADE;
  DROP TABLE "webinars" CASCADE;
  DROP TABLE "webinar_payments" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_page_main_offer_banner_options" CASCADE;
  DROP TABLE "home_page_main_offer_banner_options_locales" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "home_page_locales" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_users_signup_method";
  DROP TYPE "public"."enum_questions_question_type";
  DROP TYPE "public"."enum_test_results_status";
  DROP TYPE "public"."enum_admins_role";
  DROP TYPE "public"."enum_purchases_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum__posts_v_published_locale";
  DROP TYPE "public"."enum_webinars_type";
  DROP TYPE "public"."enum_webinar_payments_status";`)
}
