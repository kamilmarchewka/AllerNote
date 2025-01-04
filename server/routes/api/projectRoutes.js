const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Project route</h1>');
})

module.exports = router;