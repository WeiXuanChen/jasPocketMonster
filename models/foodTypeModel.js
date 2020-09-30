import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: "string",
});

module.exports = mongoose.model("FoodType", schema);
