const Workshop = require("../models/workshop.model");

const addWorkshop = async (req, res) => {
  if (req.body) {

    const newWorkshop = new Workshop(req.body);

    await newWorkshop
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  addWorkshop,
};
