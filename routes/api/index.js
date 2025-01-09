const express = require("express");

// const adminRoutes = require('./adminRoutes');
const userRoutes = require("./userRoutes");

const router = express.Router();

// router.use('/admins', adminRoutes);
router.use("/users", userRoutes);

module.exports = router;
