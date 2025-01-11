const usersDB = {
    users: require('../models/users.json'),
    setUsers: function (data) { this.users = data }
};
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {
    // na frontendzie rowniez trzeba usunac accessToken!!!!!!!!!!!!!!!!!!
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) {
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
            return res.sendStatus(204); 
        }
        const refreshToken = cookies.jwt;
        const foundUser = usersDB.users.find(u => u.refreshToken === refreshToken);
        if (!foundUser) {
            return res.sendStatus(204);
        }
        const otherUsers = usersDB.users.filter(u => u.refreshToken !== foundUser.refreshToken);
        const currentUser = {...foundUser, refreshToken: ''};
        usersDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'models', 'users.json'),
            JSON.stringify(usersDB.users)
        )
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); //potem jeszcze secure: true
        res.sendStatus(204);
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = { handleLogout };
