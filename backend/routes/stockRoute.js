const csvModel = require("../models/csv");
const csv = require("csvtojson");
const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {
  csv()
    .fromFile("stocks.csv")
    .then((jsonObj) => {
      csvModel
        .insertMany(jsonObj)
        .then(() => {
          console.log("Data Inserted", jsonObj);
          res.json({ success: "success" });
        })
        .catch((err) => {
          console.log(err);
        });
    });
});

router.get("/", async (req, res) => {
  try {
    const fetchCsvData = await csvModel.find();
    res.json(fetchCsvData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
