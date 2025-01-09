const pool = require("../data/db");

const findUserByUsername = async (username) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows[0];
};

const findUserByEmail = async (email) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return rows[0];
};

const createUser = async (username, email, password) => {
  const { rows } = await pool.query(
    "INSERT INTO users (username, email,password) VALUES ($1, $2, $3) RETURNING id, username",
    [username, email, password]
  );
  return rows[0];
};

module.exports = {
  findUserByUsername,
  findUserByEmail,
  createUser,
};
