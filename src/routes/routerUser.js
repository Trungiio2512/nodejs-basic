const express = require("express");
let router = express.Router();

const userController = require("../controller/userController");

router.get("/detail/:id", userController.getUserDetail);
router.post("/create-user", userController.createUser);

module.exports = router;
