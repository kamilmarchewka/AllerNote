// const adminService = require('../services/adminService');

// const getAllAdmins = async (req, res) => {
//     try {
//         const admins = await adminService.getAllAdmins();
//         res.status(200).json(admins);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// const getAdminById = async (req, res) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const admin = await adminService.getAdminById(id);
//         res.status(200).json(admin);
//     } catch (err) {
//         res.status(404).json({ error: err.message });
//     }
// };

// const createAdmin = async (req, res) => {
//     try {
//         const { firstname, lastname } = req.body;
//         const newAdmin = await adminService.createAdmin(firstname, lastname);
//         res.status(201).json(newAdmin);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

// const updateAdmin = async (req, res) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const updates = req.body;
//         const updatedAdmin = await adminService.updateAdmin(id, updates);
//         res.status(200).json(updatedAdmin);
//     } catch (err) {
//         res.status(404).json({ error: err.message });
//     }
// };

// const deleteAdmin = async (req, res) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         await adminService.deleteAdmin(id);
//         res.status(204).send();
//     } catch (err) {
//         res.status(404).json({ error: err.message });
//     }
// };

// module.exports = {
//     getAllAdmins,
//     getAdminById,
//     createAdmin,
//     updateAdmin,
//     deleteAdmin,
// };
