const express = require("express");
const app = express();

app.use(express.json());

const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

app.use("/users", userRoute);
app.use("/posts", postRoute);

app.listen(3000, console.log("Server is running at port 3000"));
