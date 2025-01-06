const { readData, writeData } = require('../models/userModel');

const getAllUsers = () => {
    return readData();
};

const getUserById = (id) => {
    const users = readData();
    const user = users.find(u => u.id === id);
    if (!user) {
        throw new Error(`User with ID ${id} not found`);
    }
    return user;
};

const createUser = (firstname, lastname) => {
    const users = readData();
    const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        firstname,
        lastname,
        role: 'user'
    };
    users.push(newUser);
    writeData(users);
    return newUser;
};

const updateUser = (id, updates) => {
    const users = readData();
    const user = users.find(u => u.id === id);
    if (!user) {
        throw new Error(`User with ID ${id} not found`);
    }
    Object.assign(user, updates);
    writeData(users);
    return user;
};

const deleteUser = (id) => {
    const users = readData();
    const updatedUsers = users.filter(u => u.id !== id);
    if (updatedUsers.length === users.length) {
        throw new Error(`User with ID ${id} not found`);
    }
    writeData(updatedUsers);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
