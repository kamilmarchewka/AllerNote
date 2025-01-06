const pool = require('./data');

const getAllAdmins = async () => {
    const { rows } = await pool.query('SELECT * FROM admins');
    return rows;
};

const getAdminById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM admins WHERE id = $1', [id]);
    if (rows.length === 0) {
        throw new Error(`Admin with ID ${id} not found`);
    }
    return rows[0];
};

const createAdmin = async (firstname, lastname) => {
    const { rows } = await pool.query(
        'INSERT INTO admins (firstname, lastname, role) VALUES ($1, $2, $3) RETURNING *',
        [firstname, lastname, 'admin']
    );
    return rows[0];
};

const updateAdmin = async (id, updates) => {
    const fields = Object.keys(updates).map((key, index) => `${key} = $${index + 2}`).join(', ');
    const values = [id, ...Object.values(updates)];

    const { rows } = await pool.query(
        `UPDATE admins SET ${fields} WHERE id = $1 RETURNING *`,
        values
    );

    if (rows.length === 0) {
        throw new Error(`Admin with ID ${id} not found`);
    }
    return rows[0];
};

const deleteAdmin = async (id) => {
    const { rowCount } = await pool.query('DELETE FROM admins WHERE id = $1', [id]);
    if (rowCount === 0) {
        throw new Error(`Admin with ID ${id} not found`);
    }
};

module.exports = {
    getAllAdmins,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
};