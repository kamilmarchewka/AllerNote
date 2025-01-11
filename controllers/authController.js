const usersDB = {
  users: require('../models/users.json'),
  setUsers: function (data) { this.users = data }
};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
  }

  const foundUser = usersDB.users.find(u => u.email === email);
  if (!foundUser) {
      return res.status(401).json({ message: "User does not exist." });
  }

  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
      const accessToken = jwt.sign(
          { "email": foundUser.email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '15m' }
      );
      const refreshToken = jwt.sign(
          { "email": foundUser.email },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: '7d' }
      );

      const otherUsers = usersDB.users.filter(u => u.email !== foundUser.email);
      const currentUser = { ...foundUser, refreshToken };
      usersDB.setUsers([...otherUsers, currentUser]);

      await fsPromises.writeFile(
          path.join(__dirname, '..', 'models', 'users.json'),
          JSON.stringify(usersDB.users, null, 2)
      );

      res.cookie('jwt', refreshToken, {
          httpOnly: true,
          sameSite: 'None',
          secure: true,
          sameSite: 'strict', 
          maxAge: 24 * 60 * 60 * 1000 
      });

      return res.json({ accessToken });
  } else {
      return res.sendStatus(401);
  }
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { handleLogin };