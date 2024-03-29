const express = require("express");
const router = express.Router();

const protectRoute = require("../middleware/protectRoute");
const { getUsers } = require("../controller/users");

router.get('/' , protectRoute , getUsers)

module.exports = router;