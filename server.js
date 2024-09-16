const express = require("express");
const logger = require("./Config/logger");
const connectDB = require("./Db/mongo");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.route");
const app = express();
const User = require("./models/User");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", userRouter);

app.get("/", (req, res) => {
  res.status(200).json("welcome");
});

const PORT = 4000;
app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`));
