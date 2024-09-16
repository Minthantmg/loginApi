const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  login,
} = require("../controllers/user.controller");

router.get("/users", getUsers);
router.post("/create", createUser);
router.post("/login", login);
module.exports = router;
