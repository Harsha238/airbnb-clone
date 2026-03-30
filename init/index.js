const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;


async function main() {
  await mongoose.connect(MONGO_URI);
}


main()
  .then(async() => {
    console.log("connected to DB");
    await Listing.deleteMany({});
    console.log("deleted old data");
    initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66b1c0f8d9c7e3b2a1234567"
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });




























