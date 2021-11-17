import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: "string",
  userName: "string",
  userPassword: "string",
  buyerId: "string",
  wishList: [{
    type: String
  }],
});

module.exports = mongoose.model("User", schema);
