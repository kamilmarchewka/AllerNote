import {defineConfig} from "drizzle-kit"

export default defineConfig({
    schema: "./app/database/schema.ts",
    out: "./app/database/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    }
})