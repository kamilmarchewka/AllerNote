const userModel = require('../models/userModel');

const getAllUsers = async () => {
    return await userModel.getAllUsers();
};

const getUserById = async (id) => {
    return await userModel.getUserById(id);
};

const createUser = async (username, email, password) => {
    return await userModel.createUser(username, email, password);
};

const updateUser = async (id, updates) => {
    return await userModel.updateUser(id, updates);
};

const deleteUser = async (id) => {
    await userModel.deleteUser(id);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};