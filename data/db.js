const { Pool } = require("pg");

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

(async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to the database successfully!");
    client.release();
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
})();

module.exports = pool;
