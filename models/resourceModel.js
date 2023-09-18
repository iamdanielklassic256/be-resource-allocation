const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    resourceName: {
        type: String,
        required: true
    },
    resourceType: {
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
        
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    maximumCapacity: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('Resource', resourceSchema);
