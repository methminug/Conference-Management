const express = require("express");

const router = express.Router();
const UserController = require("../controllers/login");
router.get("/auth", UserController.login);

module.exports = router;