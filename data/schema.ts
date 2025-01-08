import {pgTable, serial, varchar, boolean, timestamp, integer, text,} from "drizzle-orm/pg-core"
import {relations} from "drizzle-orm"
import {sql} from "drizzle-orm"
import { time } from "drizzle-orm/mysql-core"

//struktury tabel
export const user = pgTable("user", 
    {
        id: serial("id").primaryKey(),
        userneme: varchar("username").unique().notNull(),
        email: varchar("email").unique().notNull(),
        password: varchar("password").notNull(),
        active: boolean("active").notNull().default(true),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
    }
)

export const notes = pgTable("notes",
    {
        id: serial("note_id").primaryKey(),
        userId: integer("user_id").references(() => user.id).notNull(),
        content: text("content").notNull(),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
    }
)

export const symptoms = pgTable("symptoms", 
    {
        id: serial("symptome_id").primaryKey(),
        name: varchar("symptom_name").notNull(),
    }
)

export const userSymptoms = pgTable("user_symptoms",
    {
        id: serial("id").primaryKey(),
        userId: integer("user_id").references(() => user.id).notNull(),
        symptomId: integer("symptom_id").references(() => symptoms.id).notNull(),
        severity: integer("severity").notNull(),
        updatedAt: timestamp("updated_at").notNull().defaultNow(),
    },
    (table) => ({
        severityCheck: sql`CHECK (severity >= 1 AND severity <= 5)`, 
        uniqueUserSymptom: sql`UNIQUE (user_id, symptom_id)`,
    })
)

export const regions = pgTable("regions",
    {
        id: serial("region_id").primaryKey(),
        name: varchar("region_name").notNull(),
    }
)

export const allergenInfo = pgTable("allergen_info",
    {
        id: serial("id").primaryKey(),
        regionId: integer("region_id").notNull(),
        allergen: varchar("allergen").notNull(),
    }
)

export const userLocation = pgTable("user_location",
    {
        id: serial("region_id").primaryKey(),
        userId: integer("user_id").references(() => user.id).notNull(),
        regionId: integer("region_id").references(() => regions.id).notNull(),
    }
)

export const allergenLocation = pgTable("allergen_location",
    {
        regionId: integer("region").references(() => regions.id).notNull(),
        allergenId: integer("allergen_id").references(() => allergenInfo.id).notNull()
    }, (table) => ({
        uniqueRegionAllergen: sql`UNIQUE (region_id, allergen_id)`,
    })
)

//relacje
export const allergicRelations = relations(user, 
    ({ many }) => ({
    notes: many(notes),
    userSymptoms: many(userSymptoms),
    userLocation: many(userLocation),
}))

export const notesRelations = relations(notes, 
    ({ one }) => ({
    user: one(user, {
        fields: [notes.userId],
        references: [user.id],
    }),
}))

export const regionsRelations = relations(regions, 
    ({ many }) => ({
    userLocation: many(userLocation),
    allergenLocation: many(allergenLocation),
}))

export const userLocationRelations = relations(userLocation, 
    ({ one }) => ({
    user: one(user, {
        fields: [userLocation.userId],
        references: [user.id],
    }),
    region: one(regions, {
        fields: [userLocation.regionId],
        references: [regions.id]
    }),
}))

export const allergenLocationRelations = relations(allergenLocation, 
    ({ one }) => ({
    region: one(regions, {
        fields: [allergenLocation.regionId],
        references: [regions.id],
    }),
    allergenInfo: one(allergenInfo, {
        fields: [allergenLocation.allergenId],
        references: [allergenInfo.id],
    }),
}))

export const allergenInfoRelations = relations(allergenInfo, 
    ({ many }) => ({
    allergenLocation: many(allergenLocation),
}))

export const userSymptomsRelations = relations(userSymptoms, 
    ({ one }) => ({
    user: one(user, {
        fields: [userSymptoms.userId],
        references: [user.id],
    }),
    symptom: one(symptoms, {
        fields: [userSymptoms.symptomId],
        references: [symptoms.id],
    }),
}))

export const symptomsRelations = relations(symptoms, 
    ({ many }) => ({
    userSymptoms: many(userSymptoms),
}))