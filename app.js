
const express = require('express');

const app = express(); // 建立一個Express伺服器
const path = require('path');

const staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

app.listen(3102, () => {
  console.log('App is running on port 3102!');
});

app.use('/test', (req, res) => {
  // todo: refresh page will fail
  console.log('[test]');
  res.send(() => (
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>JAS Pocket Monster</title>
      </head>
      <body>
        <div id="root">123333</div>
        <script src="/bundle.js"> </script>
      </body>
    </html>`
  ));
});

app.get('/*', (req, res) => {
  // todo: refresh page will fail
  console.log('[/******]');
  res.send(() => (
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>JAS Pocket Monster</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/bundle.js"> </script>
      </body>
    </html>`
  ));
});

// todo: BE api route
// const router = express.Router();
// router.get('/about', (req, res) => {
//   res.send('home page!');
// });

// ------------------------------------------------------------------
const mongoose = require('mongoose');

// const FoodTypeModel = require('./models/foodTypeModel');

mongoose.connect('mongodb://localhost:27017/jasPocketMonster', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log('MongoDB Connected: ', new Date())) // 成功時顯示MongoDB Connected
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
