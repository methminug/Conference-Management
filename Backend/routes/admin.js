const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");

router.get("/attendeeCount", AdminController.attendeesCount);
router.get("/researchersCount", AdminController.researchersCount);
router.get("/presentersCount", AdminController.presentersCount);
router.get("/getPendingNotice", AdminController.getPendingNotice);
router.get("/accept/:id", AdminController.toApproveNotice);
router.get("/reject/:id", AdminController.toRejectNotice);

module.exports = router;
