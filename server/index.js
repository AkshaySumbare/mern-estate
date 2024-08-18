const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});
