const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");

router.get("/attendeeCount", AdminController.attendeesCount);
router.get("/researchersCount", AdminController.researchersCount);
router.get("/presentersCount", AdminController.presentersCount);

module.exports = router;
