const express = require("express");
const userBase = require("./userBase.js");

const router = express.Router();

router.get("/users", (req, res) => {
  const usernames = userBase.getUserBase();
  if (usernames.length) {
    res.status(200).json(usernames);
  } else {
    res.status(404).json({ message: "No users found" });
  }
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Please provide a username and password" });
  } else {
    const newUser = userBase.registerUser(username, password);
    if (newUser) {
      res.status(201).json(newUser);
    } else {
      res.status(400).json({ message: "That username is already taken" });
    }
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Please provide a username and password" });
  } else {
    const user = userBase.loginUser(username, password);
    if (user) {
      res.status(200).json({ message: `Welcome ${user.username}!` });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  }
});

module.exports = router;
