const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaSchema = new Schema({
    area_id: {
        type: Number, 
        required: true
    },
    district: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Area', areaSchema);