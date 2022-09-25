const mongoose = require("mongoose");

const { DATA_DB, TEST_DB, PRODUCTION_DB } = require("./key");

let mongoUrl = null;
const mongoConnection = () => {
  if (process.env.NODE_ENV === "test") {
    mongoUrl = TEST_DB || "mongodb://localhost:27017";
  } else if (process.env.NODE_ENV === "production") {
    mongoUrl = PRODUCTION_DB;
  } else {
    mongoUrl = DATA_DB;
  }
  // console.log(mongoUrl);
  return mongoose.connect(mongoUrl);
};

module.exports = mongoConnection;
