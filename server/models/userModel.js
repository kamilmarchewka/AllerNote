const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../data/users.json');

const readData = () => {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData);
};

const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

module.exports = {
    readData,
    writeData
};