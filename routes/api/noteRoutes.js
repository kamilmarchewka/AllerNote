const express = require("express");
const addNote = require("../../controllers/noteController");

const router = express.Router();

router.post('/', addNoteController.addNote);

module.exports = router;