const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceConstraintSchema = new Schema({
    resource: {
        type: Schema.Types.ObjectId,
        ref: 'Resource',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    details: {
        type: String
    }
});

module.exports = mongoose.model('ResourceConstraint', resourceConstraintSchema);
