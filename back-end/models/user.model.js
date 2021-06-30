const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  topic: { type: String, trim: true, required: true },
  speakers: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "speaker",
  },
  sessiontype: { type: String, trim: true, required: true },
  content: { type: String, trim: true, required: true },
  tracks: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "track",
  },
  order: { type: Number, trim: true },
  durationMinutes: { type: Number, trim: true },
  startAt: { type: String, trim: true },
  description: { type: String, trim: true },
  
});

const User = mongoose.model("session", userSchema);

module.exports = User;
