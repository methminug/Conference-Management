const mongoose = require("mongoose");

const userScheama = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    contactNum: {
        type: String,
        required: true,
        trim: true,
    },

    designation: {
        type: String,
        required: true,
        trim: true,
    },
    userType: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model("users", userScheama);
