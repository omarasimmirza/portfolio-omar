const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.mongo_url);
  console.log("MongoDB connected...");
} catch (err) {
  console.log(err.message);
  process.exit(1);
}

const connection = mongoose.connection;

module.exports = connection;
