const express = require("express")
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//require controllers
const userController = require("../controllers/user")

//testing 
router.get("/test", userController.test)

//signup users
router.post("/signup", userController.user);

//cleaning up  users incase created more than once
router.delete("/:userId", userController.userDeleted);

//checking if a user already has an account , if no then create new user
router.post("/login", userController.userLogin);



module.exports = router;