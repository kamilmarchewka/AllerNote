import {pgTable, serial, varchar, boolean, timestamp, integer, text,} from "drizzle-orm/pg-core"
import {relations} from "drizzle-orm"
import {sql} from "drizzle-orm"
import { time } from "drizzle-orm/mysql-core"

//struktury tabel
export const allergic = pgTable("allergic", 
    {
        id: serial("id").primaryKey(),
        firstName: varchar("first_name").notNull(),
        lastName: varchar("last_name").notNull(),
        email: varchar("email").unique().notNull(),
        active: boolean("active").notNull().default(true),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
    }
)

export const notes = pgTable("notes",
    {
        id: serial("id").primaryKey(),
        userId: integer("user_id").references(() => allergic.id).notNull(),
        content: text("content").notNull(),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
    }
)

export const symptoms = pgTable("symptoms", 
    {
        id: serial("id").primaryKey(),
        name: varchar("symptom_name").notNull(),
    }
)

export const userSymptoms = pgTable("user_symptoms",
    {
        id: serial("id").primaryKey(),
        userId: integer("user_id").references(() => allergic.id).notNull(),
        symptomId: integer("symptom_id").references(() => symptoms.id).notNull(),
        severity: integer("severity").notNull(),
        updatedAt: timestamp("updated_at").notNull().defaultNow(),
    },
    (table) => ({
        severityCheck: sql`CHECK (severity >= 1 AND severity <= 5)`, 
        //uniqueUserSymptom: sql`UNIQUE (user_id, symptom_id)`,
    })
)



//relacje
export const allergicRelations = relations(allergic, ({ many }) => ({
    notes: many(notes),
    userSymptoms: many(userSymptoms),
}))

export const symptomRelations = relations(symptoms, ({ many }) => ({
    userSymptoms: many(userSymptoms),
}))

export const notesRelations = relations(notes, ({ one }) => ({
    user: one(allergic, {
        fields: [notes.userId],
        references: [allergic.id],
    }),
}))

export const userSymptomsRelations = relations(userSymptoms, ({ one }) => ({
    user: one(allergic, {
        fields: [userSymptoms.userId],
        references: [allergic.id],
    }),
    symptom: one(symptoms, {
        fields: [userSymptoms.symptomId],
        references: [symptoms.id],
    }),
}))