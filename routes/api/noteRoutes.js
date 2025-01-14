const express = require("express");
const noteController = require("../../controllers/noteController");

const router = express.Router();

router.post('/', noteController.addNote);

module.exports = router;