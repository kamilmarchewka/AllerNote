const usersDB = {
    users: require('../models/users.json'),
    setUsers: function (data) { this.users = data }
};

const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = (req, res) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) {
            return res.sendStatus(401);
        }
        const refreshToken = cookies.jwt;
        console.log('Refresh token:', refreshToken);
        const foundUser = usersDB.users.find(u => u.refreshToken === refreshToken);
        if (!foundUser) {
            return res.sendStatus(403);
        }
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err) {
                    console.error('JWT Verify Error:', err);
                    return res.sendStatus(403); 
                }
                if (foundUser.email !== decoded.email) {
                    return res.sendStatus(403);
                }
                const accessToken = jwt.sign(
                    { "email": decoded.email }, 
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '15m' } 
                );
                res.json({ accessToken });
            }
        );
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = { handleRefreshToken };
