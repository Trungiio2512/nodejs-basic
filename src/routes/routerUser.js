const express = require("express");
let router = express.Router();

const userController = require("../controller/userController");

router.get("/detail/:id", userController.getUserDetail);
router.get("/edit-user/:id", userController.editUser);
router.post("/create-user", userController.createUser);
router.delete("/delete-user/:id", userController.deleteUser);
router.put("/update-user/:id", userController.updateUser);

module.exports = router;
