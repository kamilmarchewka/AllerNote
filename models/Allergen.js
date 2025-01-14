const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allergenSchema = new Schema({
    allergen_id: {
        type: Number, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    intensity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Allergen', allergenSchema);