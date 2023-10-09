const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connect() {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect succesfully");
      } catch (error) {
        console.log("Connect failure");
      }
}

module.exports = { connect };