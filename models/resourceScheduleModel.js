const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceScheduleSchema = new Schema({
    resource: {
        type: Schema.Types.ObjectId,
        ref: 'Resource',
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Available', 'Reserved', 'In Use'],
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    reservedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User' // If applicable, reference to user/institution
    }
});

module.exports = mongoose.model('ResourceSchedule', resourceScheduleSchema);