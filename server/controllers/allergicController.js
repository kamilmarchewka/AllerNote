// const allergicService = require('../services/allergicService');

// // Pobierz wszystkich użytkowników
// const getAllAllergic = async (req, res) => {
//     try {
//         const users = await allergicService.getAllAllergic();
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // Pobierz użytkownika po ID
// const getAllergicById = async (req, res) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const user = await allergicService.getAllergicById(id);
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(404).json({ error: err.message });
//     }
// };

// // Utwórz nowego użytkownika
// const createAllergic = async (req, res) => {
//     try {
//         const { email } = req.body;
//         const newUser = await allergicService.createAllergic(email);
//         res.status(201).json(newUser);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

// // Zaktualizuj użytkownika
// const updateAllergic = async (req, res) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const updates = req.body;
//         const updatedUser = await allergicService.updateAllergic(id, updates);
//         res.status(200).json(updatedUser);
//     } catch (err) {
//         res.status(404).json({ error: err.message });
//     }
// };

// // Usuń użytkownika
// const deleteAllergic = async (req, res) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         await allergicService.deleteAllergic(id);
//         res.status(204).send();
//     } catch (err) {
//         res.status(404).json({ error: err.message });
//     }
// };

// module.exports = {
//     getAllAllergic,
//     getAllergicById,
//     createAllergic,
//     updateAllergic,
//     deleteAllergic,
// };
