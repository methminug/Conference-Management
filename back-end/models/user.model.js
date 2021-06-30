const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  name: { type: String, trim: true, required: true },
  contactNumber: { type: String, trim: true, required: true },
  userType: { type: String, trim: true, required: true },  
});

const User = mongoose.model("user", userSchema);

module.exports = User;
