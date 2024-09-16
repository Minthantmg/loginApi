const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("../Config/logger");
dotenv.config();

const connectToDatabase = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbURI);
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("Error connecting to MongoDB", error);
  }
};

module.exports = connectToDatabase;
