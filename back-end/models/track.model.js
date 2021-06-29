const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  speakers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "speaker",
    },
  ],
  sessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "session",
    },
  ],
});

const Track = mongoose.model("track", trackSchema);

module.exports = Track;
