const express = require("express");
const { getPollenForLocation } = require("../controllers/pollenController");

const router = express.Router();

// Endpoint do pobierania danych o pyłkach
router.get("/pollen", getPollenForLocation);

module.exports = router;
