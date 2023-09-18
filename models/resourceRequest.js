const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceRequestSchema = new Schema({
    resource: {
        type: Schema.Types.ObjectId,
        ref: 'Resource',
        required: true
    },
    requestedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Client' // Reference to the Users table if applicable
    },
    startTimeRequested: {
        type: Date,
        required: true
    },
    endTimeRequested: {
        type: Date,
        required: true
    },
    dateRequested: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    additionalNotes: String
});

module.exports = mongoose.model('ResourceRequest', resourceRequestSchema);
