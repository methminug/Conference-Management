const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller');

module.exports = () => {
    router.post("/", userController.addUser);
    router.get("/", userController.getAllUsers);

    return router;
}