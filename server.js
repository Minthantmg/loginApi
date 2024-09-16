const express = require("express");
const logger = require("./Config/logger");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("welcome");
});
const PORT = 4000;
app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`));
