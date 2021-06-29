const Track = require("../models/track.model");

const addTrack = async (req, res) => {
  if (req.body) {
    const newTrack = new Track(req.body);

    console.log(newTrack)

    await newTrack
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getAllTracks = async (req, res) => {

  await Track.find({})
    .populate("track", "name")
    .then((data) => {
      res.status(200).send({ tracks: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const getSpeakersAndSessionsOfTrack = async (req, res) => {
  if (req.params && req.params.id) {
    await Track.findById(req.params.id)
      .populate("speakers", "name description designation placeOfWork linkedInProfile speakerImage")
      .populate("sessions","_id")
      .then((data) => {
        res.status(200).send({ speakers: data.speakers, sessions: data.sessions });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  getAllTracks,
  addTrack,
  getSpeakersAndSessionsOfTrack
};
