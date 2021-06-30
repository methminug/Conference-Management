const express = require("express");
const router = express.Router();
const workshopController = require('../controllers/workshop.controller');

module.exports = () => {
    router.post("/", workshopController.addWorkshop);

    return router;
}