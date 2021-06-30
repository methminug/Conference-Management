const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const addUser = async (req, res) => {
  if (req.body) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    req.body.password = hashedPassword;

    const newUser = new User(req.body);

    await newUser
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

//get all users
const getAllUsers = async (req, res) => {
  await User.find({})
    .populate(
      "user",
      "email name contactNumber userType"
    )
    .then((data) => {
      res.status(200).send({ users: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

//get a user's TICKET

module.exports = {
  addUser,
  getAllUsers,
};
