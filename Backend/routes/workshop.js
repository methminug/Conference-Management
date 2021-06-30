const express = require("express");
const router = express.Router();
const WorkshopController = require("../controllers/Workshop");

router.get("/getAllWorkshops", WorkshopController.getAllWorkshops);

module.exports = router;
