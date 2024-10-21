const express = require("express");

const router = express.Router();

const userController = require("../controller/userController");

router.get("/getAll", userController.getUsers); //localhost:5000/user/getAll

router.post("/create", userController.createUser); //localhost:5000/user/create

router.put("/update/:id", userController.updateUser); //localhost:5000/user/update/:id

module.exports = router;