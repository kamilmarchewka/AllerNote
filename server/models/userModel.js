const pool = require('../../data/db');

const getAllUsers = async () => {
    const { rows } = await pool.query('SELECT * FROM allergic');
    return rows;
};

const getUserById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM allergic WHERE id = $1 LIMIT 1', [id]);
    if (rows.length === 0) {
        throw new Error('User not found');
    }
    return rows[0];
};

const createUser = async (username, email, password) => {
    const { rows } = await pool.query(
        'INSERT INTO allergic (username, email, password, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *',
        [username, email, password]
    );
    return rows[0];
};

const updateUser = async (id, updates) => {
    const keys = Object.keys(updates);
    const values = Object.values(updates);

    const setClause = keys.map((key, index) => `${key} = $${index + 2}`).join(', ');

    const { rows } = await pool.query(
        `UPDATE allergic SET ${setClause}, updated_at = NOW() WHERE id = $1 RETURNING *`,
        [id, ...values]
    );

    if (rows.length === 0) {
        throw new Error('User not found');
    }
    return rows[0];
};

const deleteUser = async (id) => {
    const { rowCount } = await pool.query('DELETE FROM allergic WHERE id = $1', [id]);
    if (rowCount === 0) {
        throw new Error('User not found');
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};