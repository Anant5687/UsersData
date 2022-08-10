const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    profile: {
        type: []
    },

}, {
    timestamps: true
})

const Registration = new mongoose.model('Registration', registrationSchema)

module.exports = Registration