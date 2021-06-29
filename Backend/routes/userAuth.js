const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.get("/auth", UserController.login);

module.exports = router;
