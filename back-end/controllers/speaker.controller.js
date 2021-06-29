const Speaker = require("../models/speaker.model");

const addSpeaker = async (req, res) => {
  if (req.body) {
    const newSpeaker = new Speaker(req.body);

    console.log(newSpeaker)

    await newSpeaker
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getAllSpeakers = async (req, res) => {

  await Speaker.find({})
    .populate("speaker", "name description designation placeOfWork linkedInProfile")
    .then((data) => {
      res.status(200).send({ speakers: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const getSpeakersOfTrack = async (req, res) => {
  //Make track model
  // if (req.params && req.params.id) {
  //   await Track.findById(req.params.id)
  //     .populate("products", "code name amount size")
  //     .then((data) => {
  //       res.status(200).send({ products: data.products });
  //     })
  //     .catch((error) => {
  //       res.status(500).send({ error: error.message });
  //     });
  // }
};

module.exports = {
  addSpeaker,
  getAllSpeakers
};
