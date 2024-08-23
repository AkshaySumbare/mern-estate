const express = require("express");
const router = express.Router();
const listController = require("../controllers/listing.controller");
 const verifyToken = require('../utils/verifyToken');

router.post("/create",verifyToken, listController.createListing);
router.delete("/delete/:id",verifyToken, listController.deleteListing);

module.exports = router;
