const express = require("express");
const Controller = require("../controllers/user.controller");
const verifyToken = require("../utils/verifyToken");

const router = express.Router();

router.use("/test", Controller.test);
router.post("/update/:id", verifyToken, Controller.updateUser);
router.delete("/delete/:id", verifyToken, Controller.deleteUser);
router.get("/listings/:id", verifyToken, Controller.getUserListing);

module.exports = router;
