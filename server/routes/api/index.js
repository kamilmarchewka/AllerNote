const express = require('express');
const router = express.Router();

const adminRoutes = require('./admin');
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/admin', adminRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;