const { getPollenData } = require("../models/pollenService");

const getPollenForLocation = async (req, res) => {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    try {
        const pollenData = await getPollenData(lat, lng);
        res.status(200).json(pollenData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getPollenForLocation };
