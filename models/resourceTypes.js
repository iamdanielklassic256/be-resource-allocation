const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceTypeSchema = new Schema({
    name: {
        type: String,
    }
});

module.exports = mongoose.model('Type', resourceTypeSchema);
