const express = require("express");

const userRoutes = require("./userRoutes");
const noteRoutes = require('./noteRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/kalendarz', noteRoutes);

module.exports = router;
