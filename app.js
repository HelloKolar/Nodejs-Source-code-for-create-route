require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(process.env.DB_NA);

app.use(express.json());

const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

app.use("/users", userRoute);
app.use("/posts", postRoute);

app.use((err, req, res, next) => {
  err.status = err.status || 200;
  res.status(err.status).json({
    cons: false,
    msg: err.message,
  });
});

app.listen(
  process.env.PORT,
  console.log(`Server is running at port ${process.env.PORT}`)
);
