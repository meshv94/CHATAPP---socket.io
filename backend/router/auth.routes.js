const express = require("express");
const router = express.Router();

const { register, login, logout } = require("../controller/auth");


router.post("/register" , register)
router.post("/login"  ,login)
router.post("/logout" ,logout)
// router.post("/auth" , authMiddleware , user)

module.exports = router