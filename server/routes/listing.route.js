const express = require("express");
const router = express.Router();
const listController = require("../controllers/listing.controller");
// const verifyToken = require('../utils/verifyToken');

router.post("/create", listController.createListing);

module.exports = router;
