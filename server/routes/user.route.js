const express = require("express");
const router = express.Router();

router.use("/test", (req, res)=>{
  res.json({
    message: "Hello World!"
  })
})

module.exports = router;