const express = require("express");
const router = express.Router();
const PublicationController = require("../controllers/publication");

router.get("/getAllPublications", PublicationController.getAllPublications);

module.exports = router;
