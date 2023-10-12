const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "data", "phones.json");

router.get("/phone", (req, res, next) => {
  const phoneData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  console.log("🚀phoneData:", phoneData)
  res.json(phoneData);
});

router.get("/phone/:phoneId", (req, res, next) => {
    const phoneId = parseInt(req.params.phoneId);

  try {
    const phoneData = JSON.parse(fs.readFileSync(dataPath, "utf8"));

    // Find the phone by its id
    const phone = phoneData.find((phone) => phone.id === phoneId);

    if (!phone) {
      res.status(404).json({ error: "Phone not found" });
    } else {
      res.json(phone);
    }
  } catch (err) {
    res.status(500).json({ error: "Unable to read the data" });
  }
});

module.exports = router;
