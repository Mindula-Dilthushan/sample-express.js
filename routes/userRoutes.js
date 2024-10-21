const express = require("express");

const router = express.Router();

const userController = require("../controller/userController");

router.get("/getAll", userController.getUsers); //localhost:5000/user/getAll

router.post("/create", userController.createUser); //localhost:5000/user/create

module.exports = router;