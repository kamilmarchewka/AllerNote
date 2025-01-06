const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { firstname, lastname } = req.body;
        const newUser = await userService.createUser(firstname, lastname);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const updates = req.body;
        const updatedUser = await userService.updateUser(id, updates);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await userService.deleteUser(id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
