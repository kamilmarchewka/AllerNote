const usersDB = {
    users: require('../../data/users.json'),
    serUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, password } = req.body;
    if(!user || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
    // check for duplicate
    const duplicate = usersDB.users.find(person => person.username === user);
    if (duplicate) return res.setStatus(409);
}