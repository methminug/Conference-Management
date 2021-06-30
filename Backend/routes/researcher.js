const express = require("express");
const router = express.Router();
const ResearcherController = require("../controllers/researcher");

router.get("/me", ResearcherController.getResearcherDetails);

module.exports = router;
