// const registerService = require('../services/registerService');

// const handleNewUser = async (req, res) => {
//     const { user, password } = req.body;

//     if (!user || !password) {
//         return res.status(400).json({ message: 'Username and password are required.' });
//     }

//     try {
//         const newUser = await registerService.registerNewUser(user, password);
//         res.status(201).json({ success: `New user ${newUser.username} created.` });
//     } catch (err) {
//         if (err.message === 'Duplicate') {
//             return res.status(409).json({ message: 'Username already exists.' });
//         }
//         res.status(500).json({ error: err.message });
//     }
// };

// module.exports = { handleNewUser };