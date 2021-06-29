const express = require("express");
const router = express.Router();
const speakerController = require('../controllers/speaker.controller');

module.exports = () => {
    router.get("/", speakerController.getAllSpeakers);
    router.post("/", speakerController.addSpeaker);

    return router;
}