const registerService = require("../services/registerService");

const handleNewUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email and password are required." });
  }

  try {
    const newUser = await registerService.registerNewUser(
      username,
      email,
      password
    );
    res.status(201).json({ success: `New user ${newUser.username} created.` });
  } catch (err) {
    if (
      err.message === "Duplicate username" ||
      err.message === "Duplicate email"
    ) {
      return res
        .status(409)
        .json({ message: "Username or email already exists." });
    }
    res.status(500).json({ error: err.message });
  }
};

module.exports = { handleNewUser };
