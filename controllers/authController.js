const usersDB = {
  users: require('../models/users.json'),
  setUsers: function (data) { this.users = data }
}
const jwt = require('jsonwebtoken');
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');


const handleLogin = async (req, res) => {
  const { email, password } = req.body; 

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }
    
  const foundUser = usersDB.users.find(u => u.email === email);
    // const accessToken = jwt.sign(
    //   { "username": foundUser.username },
    //   process.env.ACCESS_TOKEN_SECRET,
    //   { expiresIn: '2h' }
    // );
    // const refreshToken = jwt.sign(
    //   { "username": foundUser.username },
    //   process.env.REFRESH_TOKEN_SECRET,
    //   { expiresIn: '1d' }
    // );
  res.status(200).json({ success: `User ${foundUser.username} logged in.` });
  
  if (!foundUser) {
    return res.status(401).json({ message: "User does not exist." });
  }
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    res.json({ 'success': `User ${user} is logged in!` });
} else {
    res.sendStatus(401);
}
};

module.exports = { handleLogin };
