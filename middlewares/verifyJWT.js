const jwt = require('jsonwebtoken');
require('dotenv').config();

const excludedPaths = ['/api/hello']; 

const verifyJWT = (req, res, next) => {
    if (excludedPaths.includes(req.path)) {
        return next();
    }

    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing." });
    }

    const token = authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: "Token missing in Authorization header." });
    }

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) {
                console.error('JWT verification error:', err.message); 
                return res.status(403).json({ message: "Invalid or expired token." });
            }
            req.user = decoded.email;
            next(); 
        }
    );
};

module.exports = verifyJWT;
