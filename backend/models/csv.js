const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  "Current Market Price": {
    type: Number,
  },
  "Market Cap": {
    type: Number,
  },
  "Stock P/E": {
    type: Number,
  },
  "Dividend Yield": {
    type: Number,
  },
  "ROCE %": {
    type: Number,
  },
  "ROE Previous Annum": {
    type: Number,
  },
  "Debt to Equity": {
    type: Number,
  },
  EPS: {
    type: Number,
  },
  Reserves: {
    type: Number,
  },
  Debt: {
    type: Number,
  },
});

module.exports = mongoose.model("stockRecord", csvSchema);
