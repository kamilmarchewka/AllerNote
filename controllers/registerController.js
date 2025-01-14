const User = require('../models/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Username, email, and password are required."
    });
  }

  try {
    const duplicateEmail = await User.findOne({ email }).exec();
    const duplicateUsername = await User.findOne({ username }).exec();

    if (duplicateEmail) {
      return res.status(409).json({ message: "Email already in use." });
    }
    if (duplicateUsername) {
      return res.status(409).json({ message: "Username already taken." });
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPwd
    });

    console.log(newUser);
    res.status(201).json({ success: `New user ${username} created!` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred during registration." });
  }
};

module.exports = { handleNewUser };
