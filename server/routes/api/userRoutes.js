const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.get('/', (req, res) => {
    try {
        const users = getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', (req, res) => {
    try {
        const user = getUserById(parseInt(req.params.id));
        res.json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

router.post('/', (req, res) => {
    const { firstname, lastname } = req.body;
    if (!firstname || !lastname) {
        return res.status(400).json({ message: 'First and last name are required.' });
    }
    try {
        const newUser = createUser(firstname, lastname);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', (req, res) => {
    try {
        const user = updateUser(parseInt(req.params.id), req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', (req, res) => {
    try {
        deleteUser(parseInt(req.params.id));
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
