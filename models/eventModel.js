import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: "string",
  name: "string",
});

module.exports = mongoose.model("Event", schema);
