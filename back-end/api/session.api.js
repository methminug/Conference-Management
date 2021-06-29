const express = require("express");
const router = express.Router();
const sessionController = require('../controllers/session.controller');

module.exports = () => {
    router.get("/", sessionController.getAllSessions);
    router.get("/:id", sessionController.getSessionDetails);

    return router;
}