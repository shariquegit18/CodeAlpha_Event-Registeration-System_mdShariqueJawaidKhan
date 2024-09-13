const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    user: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Registration', RegistrationSchema);
