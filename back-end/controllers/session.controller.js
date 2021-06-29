const Session = require("../models/session.model");

const getAllSessions = async (req, res) => {

  await Session.find({})
    .sort({"order":1})
    .populate("speakers", "name description designation placeOfWork linkedInProfile speakerImage")
    .then((data) => {
      res.status(200).send({ sessions: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const getSessionDetails = async (req, res) => {
  if (req.params && req.params.id) {
    await Session.findById(req.params.id)
      .populate("speakers", "name description designation placeOfWork linkedInProfile speakerImage")
      .then((data) => {
        res.status(200).send({ sessions: data});
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  getAllSessions,
  getSessionDetails
};
