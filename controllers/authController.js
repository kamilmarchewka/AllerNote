const authService = require("../services/authService");

const handleLogin = async (req, res) => {
  const { user, email, password } = req.body;

  if (!user || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  try {
    const foundUser = await authService.loginUser(user, email, password);
    res.status(200).json({ success: `User ${foundUser.username} logged in.` });
  } catch (err) {
    if (err.message === "No user") {
      return res.status(401).json({ message: "User does not exist." });
    } else if (err.message === "Wrong email") {
      return res.status(401).json({ message: "Wrong email." });
    } else if (err.message === "Wrong password") {
      return res.status(401).json({ message: "Wrong password." });
    }
    res.status(500).json({ error: err.message });
  }
};

module.exports = { handleLogin };
