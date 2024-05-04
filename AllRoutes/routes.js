const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");

// Create a new user
router.get("/", async (req, res) => {
  try {
    const curds = await User.find({});
    res.send(curds);
  } catch (error) {
    res.status(500).send(error);
  }
});

//post api
router.post("/post", async (req, res) => {
  try {
    const data = new User(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
