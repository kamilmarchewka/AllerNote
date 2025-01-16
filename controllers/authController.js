const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const foundUser = await User.findOne({ email }).exec();
    if (!foundUser) {
      return res.status(401).json({ message: "User does not exist." });
    }

    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
      const roles = Object.values(foundUser.roles);
      const accessToken = jwt.sign(
        {
          UserInfo: {
            id: foundUser._id,
            roles: roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        { email: foundUser.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
      );

      foundUser.refreshToken = refreshToken;
      const result = await foundUser.save();

      res.cookie("jwt", refreshToken, {
        secure: false,
        sameSite: "Lax",
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.send();

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
