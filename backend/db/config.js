const mongoose = require("mongoose");

const dbConn = async () => {
  const connect = await mongoose
    .connect(process.env.MONGO_DB, {
      // userNewUrlParser: true,
    })
    .then((res) => console.log("CONNECT TO DB"))
    .catch((err) => {
      console.log("Connection Failed", err);
    });
};

module.exports = dbConn;
