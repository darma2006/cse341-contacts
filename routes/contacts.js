const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

router.get("/:id", (req, res) => {
  res.send(`Get contact ${req.params.id}`);
});

module.exports = router;