import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: "string",
  userName: "string",
  userPassword: "string",
});

module.exports = mongoose.model("User", schema);
