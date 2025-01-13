const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: {
            type: Number,
            default: 1984
        },
        Admin: {
            type: Number,
            default: 5150
        }
    },
    email: {
        type: String,
        required: true
    },

})