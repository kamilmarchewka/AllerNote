ALTER TABLE "allergic" RENAME TO "user";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "allergic_email_unique";--> statement-breakpoint
ALTER TABLE "notes" DROP CONSTRAINT "notes_user_id_allergic_id_fk";
--> statement-breakpoint
ALTER TABLE "user_location" DROP CONSTRAINT "user_location_user_id_allergic_id_fk";
--> statement-breakpoint
ALTER TABLE "user_symptoms" DROP CONSTRAINT "user_symptoms_user_id_allergic_id_fk";
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "username" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "password" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_location" ADD CONSTRAINT "user_location_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_symptoms" ADD CONSTRAINT "user_symptoms_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_username_unique" UNIQUE("username");--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");