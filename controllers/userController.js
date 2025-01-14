const User = require('../models/User');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ 'message': 'no users found' });
  res.json(users);
};

const getUserById = async (req, res) => {
  try {
    if (!req?.params?.id) {
      return res.status(400).json({ 'message': 'ID is required' });
    }
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
      return res.status(204).json({ 'message': 'no user matches id' });
    }
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  if (!req?.body?.username || !req?.body?.email || !req?.body?.password) {
    return res.status(400).json({ 'message': 'username, email and password are required' });
  }
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, 10);
    const result = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPwd
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    if (!req?.body?.id) {
      return res.status(400).json({ 'message': 'ID is required' });
    }
    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
      return res.status(204).json({ 'message': 'no user matches id' });
    }
    if (req.body.username) user.username = req.body.username;
    if (req.body.email) user.username = req.body.email;
    const result = user.save();
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    if (!req?.body?.id) {
      return res.status(400).json({ 'message': 'ID is required' });
    }
    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
      return res.status(204).json({ 'message': 'no user matches id' });
    }
    const result = await user.deleteOne({ _id: req.body.id });
    res.json(result);
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
