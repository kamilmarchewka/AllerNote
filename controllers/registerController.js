const usersDB = {
  users: require('../models/users.json'),
  setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email and password are required." });
  }

  const duplicate = usersDB.users.find(u => u.username === user);
  if (duplicate) return res.sendStatus(409);

  try {
    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = {
      "username": username, 
      "email": email, 
      "password": hashedPwd
    };
    usersDB.setUsers([...usersDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'models', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        console.log(usersDB.users);
        res.status(201).json({ 'success': `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { handleNewUser };
