const mongoose = require("mongoose");

const noticePostSchema = new mongoose.Schema({
    editor: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        required: true,
        ref: "user",
    },
    date: {
        type: Date,
        required: true,
        default: Date.now(),
    },

    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    isApproved: {
        type: String,
        required: true,
        default: "Pending",
    },
});

module.exports = mongoose.model("notice-post", noticePostSchema);
