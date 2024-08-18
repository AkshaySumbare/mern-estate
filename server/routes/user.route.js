const express = require("express");
const test = require("../controllers/user.controller");

const router = express.Router();

router.use("/test", test);

module.exports = router;
