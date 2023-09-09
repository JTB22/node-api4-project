const express = require("express");
const userBase = require("./userBase.js");

const router = express.Router();

router.get("/", (req, res) => {
  const usernames = userBase.getUserBase();
  if (usernames.length) {
    res.status(200).json(usernames);
  } else {
    res.status(404).json({ message: "No users found" });
  }
});

module.exports = router;
