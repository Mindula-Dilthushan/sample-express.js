const express = require("express");

const router = express.Router();

const userController = require("../controller/userController");

router.get("/getAll", userController.getUsers); //localhost:5000/user/getAll

module.exports = router;