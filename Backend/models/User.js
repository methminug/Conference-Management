const mongoose = require('mongoose');

const userScheama = mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    contactNum: {
        type: String,
        required: true
    },

    designation: {
        type: String,
        required: true,

    },

});

module.exports = mongoose.model("User", userScheama);