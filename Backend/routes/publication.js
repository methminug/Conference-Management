const express = require("express");
const router = express.Router();
const PublicationController = require("../controllers/publication");

router.get("/getAllPublications", PublicationController.getAllPublications);
router.get(
    "/getMyPublications",
    PublicationController.getResearcherPublications
);
module.exports = router;
