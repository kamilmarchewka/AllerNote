const express = require('express');
const router = express.Router();
const {
    getAllAdmins,
    getAdminById,
    createAdmin,
    updateAdmins,
    deleteAdmin
} = require('../../controllers/adminController');

router.get('/', (req, res) => {
    try {
        const admins = getAllAdmins();
        res.json(admins);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', (req, res) => {
    try {
        const admin = getAdminById(parseInt(req.params.id));
        res.json(admin);
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
        const newAdmin = createAdmin(firstname, lastname);
        res.status(201).json(newAdmin);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', (req, res) => {
    try {
        const admin = updateAdmins(parseInt(req.params.id), req.body);
        res.json(admin);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', (req, res) => {
    try {
        deleteAdmin(parseInt(req.params.id));
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
