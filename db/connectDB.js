const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    mongoose.connect(process.env.URI, {
      dbName: process.env.dbName,
    });
    console.log("connected to the db");
  } catch (err) {
    console.log(err);
  }
};
module.exports = { connectDB };
