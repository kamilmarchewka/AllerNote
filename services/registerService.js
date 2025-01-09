const bcrypt = require("bcrypt");
const userModel = require("../models/registerModel");

const registerNewUser = async (username, email, password) => {
  const duplicateUser = await userModel.findUserByUsername(username);
  if (duplicateUser) {
    throw new Error("Duplicate username");
  }
  const duplicateEmail = await userModel.findUserByEmail(email);
  if (duplicateEmail) {
    throw new Error("Duplicate email");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.createUser(username, email, hashedPassword);
  return newUser;
};

module.exports = { registerNewUser };
