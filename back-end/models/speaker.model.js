const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  designation: { type: String, trim: true, required: true },
  placeOfWork: { type: String, trim: true, required: true },
  linkedInProfile: { type: String, trim: true },
  speakerImage: { type: String, trim: true },
});

const Speaker = mongoose.model("speaker", speakerSchema);

module.exports = Speaker;
