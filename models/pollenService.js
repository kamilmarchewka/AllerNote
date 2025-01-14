require('dotenv').config();

const apiKey = process.env.AMBEEDATA_API_KEY;
console.log("Loaded API Key:", process.env.AMBEEDATA_API_KEY); // Test: Powinien wyświetlić Twój klucz API

const https = require("https");

// Funkcja pobierająca dane o pyłkach
const getPollenData = (latitude, longitude) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: "GET",
            hostname: "api.ambeedata.com",
            port: null,
            path: `/latest/pollen/by-lat-lng?lat=${latitude}&lng=${longitude}`,
            headers: {
                "x-api-key": process.env.AMBEEDATA_API_KEY, // Klucz API z pliku .env
                "Content-type": "application/json"
            }
        };

        const req = https.request(options, (res) => {
            const chunks = [];

            res.on("data", (chunk) => {
                chunks.push(chunk);
            });

            res.on("end", () => {
                const body = Buffer.concat(chunks);
                try {
                    const data = JSON.parse(body.toString());
                    resolve(data); // Zwracamy dane w formacie JSON
                } catch (error) {
                    reject(new Error("Failed to parse API response"));
                }
            });
        });

        req.on("error", (error) => {
            reject(error); // Obsługa błędów HTTP
        });

        req.end();
    });
};

//module.exports = { getPollenData };

(async () => {
    try {
        const data = await getPollenData(50.04, 19.56); // Warszawa
        console.log("Pollen Data:", JSON.stringify(data, null, 2));
    } catch (err) {
        console.error("Error:", err.message);
    }
})();
