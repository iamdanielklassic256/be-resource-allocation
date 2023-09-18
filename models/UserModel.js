const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    telephone: {
        type: String,
    },
    roles: {
        Client: {
            type: Number,
        },
        Editor: {
            type: Number,
        },
        Admin: {
            type: Number,
        }
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    updated: {
        type: Date,
        default: Date.now
    },
    refreshToken: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);