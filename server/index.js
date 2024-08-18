const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route")

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json())
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


app.use((err, req, res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})
