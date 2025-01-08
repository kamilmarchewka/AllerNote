const bcrypt = require('bcrypt');
const userModel = require('../models/registerModel');

const loginUser = async (username, email, password) => {
    const foundUser = await userModel.findUserByUsername(username);
    if (!foundUser) {
        throw new Error('No user');
    }
    if (foundUser.email !== email) {
        throw new Error('Wrong email');
    }
    const match = await bcrypt.compare(password, foundUser.password);
    if(!match) {
        throw new Error('Wrong password');
    }
    return foundUser;
}

module.exports = { loginUser };