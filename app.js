const express = require("express");

const app = express(); // 建立一個Express伺服器
const path = require("path");

const staticPath = path.join(__dirname, "/dist");
app.use(express.static(staticPath));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "dist", "index.html"));
  // todo: BE api:express.Router()
  // todo: error handle
  // if(request.url.indexOf('/api') === -1)
});

const port = process.env.PORT || 3102;
app.listen(port, () => {
  console.log("App is running on port 3102!");
});

// ------------------------------------------------------------------
const mongoose = require("mongoose");

// const FoodTypeModel = require('./models/foodTypeModel');

mongoose
  .connect("mongodb://localhost:27017/jasPocketMonster", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected: ", new Date())) // 成功時顯示MongoDB Connected
  .catch((err) => console.log(err));

// const initFoodType = new FoodTypeModel({
//   name: '拉麵',
// });
// initFoodType.save((err) => {
//   if (err) {
//     return console.log('[ERROR]: ', err);
//   }
//   // saved!
//   return null;
// });
