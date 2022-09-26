const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbConn = require("./db/config");
const path = require("path");
const csvModel = require("./models/csv");
const csv = require("csvtojson");
const stockRoute = require("./routes/stockRoute");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

//db connection
dbConn();

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING....");
});

app.use(cors());

app.use(express.json());

app.use(express.static(path.resolve(__dirname)));

app.use("/api/stock", stockRoute);

app.post("/add", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
