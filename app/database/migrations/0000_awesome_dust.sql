CREATE TABLE IF NOT EXISTS "allergen_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"allergen" varchar NOT NULL,
	"allergen_intensity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "allergen_location" (
	"region_id" integer NOT NULL,
	"allergen_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "allergic" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "allergic_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notes" (
	"note_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "regions" (
	"region_id" serial PRIMARY KEY NOT NULL,
	"region_name" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "symptoms" (
	"symptom_id" serial PRIMARY KEY NOT NULL,
	"symptom_name" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_location" (
	"region_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_symptoms" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"symptom_id" integer NOT NULL,
	"severity" integer NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "allergen_location" ADD CONSTRAINT "allergen_location_region_id_regions_region_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("region_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "allergen_location" ADD CONSTRAINT "allergen_location_allergen_id_allergen_info_id_fk" FOREIGN KEY ("allergen_id") REFERENCES "public"."allergen_info"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notes" ADD CONSTRAINT "notes_user_id_allergic_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."allergic"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_location" ADD CONSTRAINT "user_location_user_id_allergic_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."allergic"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_symptoms" ADD CONSTRAINT "user_symptoms_user_id_allergic_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."allergic"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_symptoms" ADD CONSTRAINT "user_symptoms_symptom_id_symptoms_symptom_id_fk" FOREIGN KEY ("symptom_id") REFERENCES "public"."symptoms"("symptom_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
