const logger = require("../Config/logger");
const User = require("../models/User");
const mongoose = require("mongoose");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const userData = req.body;
  try {
    const response = await User.findOne({
      email: userData.email,
      password: userData.password,
    });

    if (response) {
      res.send({
        message: "Authentication Successful",
        statusCode: 200,
        data: response,
      });
    } else {
      res.status(401).send({ message: "Authentication Failed" });
    }
  } catch (error) {
    logger.error("Error occurred when logging in", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  getUsers,
  createUser,
  login,
};
