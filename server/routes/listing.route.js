const express = require("express");
const router = express.Router();
const listController = require("../controllers/listing.controller");
 const verifyToken = require('../utils/verifyToken');

router.post("/create",verifyToken, listController.createListing);
router.delete("/delete/:id",verifyToken, listController.deleteListing);
router.post("/update/:id",verifyToken, listController.updateListing);
router.get('/get/:id', listController.getListing)

module.exports = router;
