const pool = require('./data');

const getAllUsers = async () => {
    const { rows } = await pool.query('SELECT * FROM users');
    return rows;
};

const getUserById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (rows.length === 0) {
        throw new Error(`User with ID ${id} not found`);
    }
    return rows[0];
};

const createUser = async (firstname, lastname) => {
    const { rows } = await pool.query(
        'INSERT INTO users (firstname, lastname, role) VALUES ($1, $2, $3) RETURNING *',
        [firstname, lastname, 'user']
    );
    return rows[0];
};

const updateUser = async (id, updates) => {
    const fields = Object.keys(updates).map((key, index) => `${key} = $${index + 2}`).join(', ');
    const values = [id, ...Object.values(updates)];

    const { rows } = await pool.query(
        `UPDATE users SET ${fields} WHERE id = $1 RETURNING *`,
        values
    );

    if (rows.length === 0) {
        throw new Error(`User with ID ${id} not found`);
    }
    return rows[0];
};

const deleteUser = async (id) => {
    const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    if (rowCount === 0) {
        throw new Error(`User with ID ${id} not found`);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};