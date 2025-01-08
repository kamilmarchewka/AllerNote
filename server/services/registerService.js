// const bcrypt = require('bcrypt');
// const userModel = require('../models/registerModel');

// const registerNewUser = async (username, password) => {
//     const duplicateUser = await userModel.findUserByUsername(username);
//     if (duplicateUser) {
//         throw new Error('Duplicate');
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await userModel.createUser(username, hashedPassword);
//     return newUser;
// };

// module.exports = { registerNewUser };