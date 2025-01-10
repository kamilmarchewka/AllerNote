import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Necessary for Neon SSL connections
  },
});

export const query = async (text, params) => {
  const res = await pool.query(text, params);
  return res.rows;
};
