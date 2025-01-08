const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const loginUser = async (username, password) => {
    const foundUser = await userModel.findUserByUsername(username);
    if (!foundUser) {
        throw new Error('No user');
    }
    const match = await bcrypt.compare(password, foundUser.password);
    if(!match) {
        throw new Error('Wrong password');
    }
    return foundUser;
}

module.exports = { loginUser };