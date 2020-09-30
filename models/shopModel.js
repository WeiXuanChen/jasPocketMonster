import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: "string",
  shopName: "string",
});

module.exports = mongoose.model("Shop", schema);
