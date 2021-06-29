const express = require("express");
const router = express.Router();
const trackController = require('../controllers/track.controller');

module.exports = () => {
    router.get("/", trackController.getAllTracks);
    router.get("/:id", trackController.getSpeakersAndSessionsOfTrack);

    return router;
}