import { database } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    await migrate(database, {
      migrationsFolder: "migrations",
    });
    console.log("Migration completed");
  } catch (error) {
    console.error("Error during migration: ", error);
    process.exit(1);
  }
};

main();
