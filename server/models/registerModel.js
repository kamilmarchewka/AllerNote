const pool = require('./db');

const findUserByUsername = async (username) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return rows[0];
};

const createUser = async (username, hashedPassword) => {
    const { rows } = await pool.query(
        'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
        [username, hashedPassword]
    );
    return rows[0];
};

module.exports = {
    findUserByUsername,
    createUser,
};
