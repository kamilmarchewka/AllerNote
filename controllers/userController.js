const data = {
  users: require('../models/users.json'),
  setUsers: function (data) { this.users = data }
}

const getAllUsers = async (req, res) => {
  try {
    res.json(data.users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = data.users.find(emp => emp.id === parseInt(req.params.id));
    if (!user) {
        return res.status(400).json({ "message": `user ID ${req.params.id} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = {
      id: data.users?.length ? data.users[data.users.length - 1].id + 1 : 1,
      username: req.body.username
    }

    if (!newUser.username) {
      return res.status(400).json({ 'message': 'Usename is required.' });
    }
    data.setUsers([...data.users, newUser]);
    res.status(201).json(data.users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = data.users.find(emp => emp.id === parseInt(req.body.id));
    if (!user) {
        return res.status(400).json({ "message": `user ID ${req.body.id} not found` });
    }
    if (req.body.username) user.username = req.body.username;
    const filteredArray = data.users.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, user];
    data.setUsers(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = data.users.find(emp => emp.id === parseInt(req.body.id));
    if (!user) {
        return res.status(400).json({ "message": `user ID ${req.body.id} not found` });
    }
    const filteredArray = data.users.filter(emp => emp.id !== parseInt(req.body.id));
    data.setUsers([...filteredArray]);
    res.json(data.users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
