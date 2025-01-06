const adminService = require('../services/adminService');

const getAllAdmins = async (req, res) => {
    try {
        const admins = await adminService.getAllAdmins();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAdminById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const admin = await adminService.getAdminById(id);
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const createAdmin = async (req, res) => {
    try {
        const { firstname, lastname } = req.body;
        const newAdmin = await adminService.createAdmin(firstname, lastname);
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateAdmin = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const updates = req.body;
        const updatedAdmin = await adminService.updateAdmin(id, updates);
        res.status(200).json(updatedAdmin);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const deleteAdmin = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await adminService.deleteAdmin(id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    getAllAdmins,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
};
