const mongoose = require("mongoose");

const WorkshopSchema = new mongoose.Schema({
    conductor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: "presenters",
    },
    title: {
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

module.exports = mongoose.model("workshops", WorkshopSchema);
