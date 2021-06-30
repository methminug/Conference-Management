const express = require("express");
const router = express.Router();
const PublicationController = require("../controllers/publication");

router.get("/getAllPublications", PublicationController.getAllPublications);
router.get(
    "/getMyPublications",
    PublicationController.getResearcherPublications
);
router.get("/create", PublicationController.postPublication);
module.exports = router;
