const { readData, writeData } = require('../models/adminModel');

const getAllAdmins = () => {
    return readData();
};

const getAdminById = (id) => {
    const admins = readData();
    const admin = admins.find(a => a.id === id);
    if (!admin) {
        throw new Error(`Admin with ID ${id} not found`);
    }
    return admin;
};

const createAdmin = (firstname, lastname) => {
    const admins = readData();
    const newAdmin = {
        id: admins.length > 0 ? admins[admins.length - 1].id + 1 : 1,
        firstname,
        lastname,
        role: 'admin'
    };
    admins.push(newAdmin);
    writeData(admins);
    return newAdmin;
};

const updateAdmins = (id, updates) => {
    const admins = readData();
    const admin = admins.find(a => a.id === id);
    if (!admin) {
        throw new Error(`Admin with ID ${id} not found`);
    }
    Object.assign(admin, updates);
    writeData(admins);
    return admin;
};

const deleteAdmin = (id) => {
    const admins = readData();
    const updateAdmins = admins.filter(a => a.id !== id);
    if (updateAdmins.length === admins.length) {
        throw new Error(`Admin with ID ${id} not found`);
    }
    writeData(updateAdmins);
};

module.exports = {
    getAllAdmins,
    getAdminById,
    createAdmin,
    updateAdmins,
    deleteAdmin
};
