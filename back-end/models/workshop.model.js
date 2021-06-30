const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: "user",
    },
    uploadTitle: {
        type: String,
        required: true,
        trim: true,
    },
    uploadDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },

    isApproved: {
        type: String,
        required: true,
        trim: true,
        default: "pending",
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model("workshop", workshopSchema);