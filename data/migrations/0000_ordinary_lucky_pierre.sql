CREATE TABLE "allergen_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"region_id" integer NOT NULL,
	"allergen" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "allergen_location" (
	"region" integer NOT NULL,
	"allergen_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "allergic" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "allergic_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "notes" (
	"note_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "regions" (
	"region_id" serial PRIMARY KEY NOT NULL,
	"region_name" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "symptoms" (
	"symptome_id" serial PRIMARY KEY NOT NULL,
	"symptom_name" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_location" (
	"region_id" integer NOT NULL,
	"user_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_symptoms" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"symptom_id" integer NOT NULL,
	"severity" integer NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "allergen_location" ADD CONSTRAINT "allergen_location_region_regions_region_id_fk" FOREIGN KEY ("region") REFERENCES "public"."regions"("region_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "allergen_location" ADD CONSTRAINT "allergen_location_allergen_id_allergen_info_id_fk" FOREIGN KEY ("allergen_id") REFERENCES "public"."allergen_info"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_user_id_allergic_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."allergic"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_location" ADD CONSTRAINT "user_location_user_id_allergic_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."allergic"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_location" ADD CONSTRAINT "user_location_region_id_regions_region_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("region_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_symptoms" ADD CONSTRAINT "user_symptoms_user_id_allergic_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."allergic"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_symptoms" ADD CONSTRAINT "user_symptoms_symptom_id_symptoms_symptome_id_fk" FOREIGN KEY ("symptom_id") REFERENCES "public"."symptoms"("symptome_id") ON DELETE no action ON UPDATE no action;