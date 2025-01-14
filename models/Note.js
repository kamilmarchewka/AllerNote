const mongoose = reguire('moongose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    note_id: {
        type: Number, 
        required: true
    },
    user_id: {

    }, 
    date: {
        type: Date, 
        default: Date.now,
        reguired: true
    },
    well_being: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    headache: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    runny_nose: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    itchy_nose: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    itchy_eyes: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    cought: {
        type: Number, min: 0, max: 5,
        default: 0
    },
    free_note: {
        type: String
    }
});

module.exports = mongoose.model('Note', noteSchema);