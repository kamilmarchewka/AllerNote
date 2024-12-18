import {pgTable, serial, varchar, boolean, timestamp, integer, text,} from "drizzle-orm/pg-core"
import {relations} from "drizzle-orm"
import {sql} from "drizzle-orm"
import { time } from "drizzle-orm/mysql-core"

//struktury tabel
export const allergic = pgTable("allergic", 
    {
        userId: serial("id").primaryKey(),
        email: varchar("email").unique().notNull(),
        active: boolean("active").notNull().default(true),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
    }
)

export const notes = pgTable("notes",
    {
        noteId: serial("note_id").primaryKey(),
        userId: integer("user_id").references(() => allergic.userId).notNull(),
        content: text("content").notNull(),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
    }
)

export const symptoms = pgTable("symptoms", 
    {
        symptomId: serial("symptom_id").primaryKey(),
        name: varchar("symptom_name").notNull(),
    }
)

export const userSymptoms = pgTable("user_symptoms",
    {
        id: serial("id").primaryKey(),
        userId: integer("user_id").references(() => allergic.userId).notNull(),
        symptomId: integer("symptom_id").references(() => symptoms.symptomId).notNull(),
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
        regionId: serial("region_id").primaryKey(),
        name: varchar("region_name").notNull(),
    }
)

export const allergenInfo = pgTable("allergen_info",
    {
        id: serial("id").primaryKey(),
        allergen: varchar("allergen").notNull(),
        allergenIntensity: integer("allergen_intensity").notNull(),
    }
)

export const userLocation = pgTable("user_location",
    {
        regionId: integer("region_id").references(() => regions.regionId).notNull(),
        userId: integer("user_id").references(() => allergic.userId).notNull(),
        //regionIdForeign: integer("region_id").references(() => regions.regionId).notNull(), // Nazwij regionIdForeign
    }
)


export const allergenLocation = pgTable("allergen_location", 
    {
        //id: serial("id").primaryKey(),
        regionId: integer("region_id").references(() => regions.regionId).notNull(), // Poprawiamy na regionId
        allergenId: integer("allergen_id").references(() => allergenInfo.id).notNull(),
    }
);


   
//relacje
export const allergicRelations = relations(allergic, 
    ({ many }) => ({
    notes: many(notes),
    userSymptoms: many(userSymptoms),
    userLocation: many(userLocation),
}))

export const notesRelations = relations(notes, 
    ({ one }) => ({
    user: one(allergic, {
        fields: [notes.userId],
        references: [allergic.userId],
    }),
}))

export const regionsRelations = relations(regions, 
    ({ many }) => ({
    userLocation: many(userLocation),
    allergenLocation: many(allergenLocation),
}))

export const userLocationRelations = relations(userLocation, 
    ({ one }) => ({
    user: one(allergic, {
        fields: [userLocation.userId],
        references: [allergic.userId],
    }),
    region: one(regions, {
        fields: [userLocation.regionId],
        references: [regions.regionId]
    }),
}))

export const allergenLocationRelations = relations(allergenLocation, 
    ({ one }) => ({
        region: one(regions, {
            fields: [allergenLocation.regionId],
            references: [regions.regionId],
        }),
        allergenInfo: one(allergenInfo, {
            fields: [allergenLocation.allergenId],
            references: [allergenInfo.id],
        }),
    })
);


export const allergenInfoRelations = relations(allergenInfo, 
    ({ many }) => ({
    allergenLocation: many(allergenLocation),
}))

export const userSymptomsRelations = relations(userSymptoms, 
    ({ one }) => ({
    user: one(allergic, {
        fields: [userSymptoms.userId],
        references: [allergic.userId],
    }),
    symptom: one(symptoms, {
        fields: [userSymptoms.symptomId],
        references: [symptoms.symptomId],
    }),
}))

export const symptomsRelations = relations(symptoms, 
    ({ many }) => ({
    userSymptoms: many(userSymptoms),
}))