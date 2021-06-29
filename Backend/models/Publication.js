const mongoose = require("mongoose");

const PublicationSchema = new mongoose.Schema({
    researcher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: "user",
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
    content: {
        type: String,
        required: true,
        trim: true,
    },
    isApproved: {
        type: String,
        required: true,
        default: "pending",
    },
    paymentMade: {
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = mongoose.model("research-paper", PublicationSchema);
