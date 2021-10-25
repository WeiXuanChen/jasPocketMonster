import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";
import routerAPI from "./src/server/router";

const app = express(); // 建立一個Express伺服器

const staticPath = path.join(__dirname, "/dist");
app.use(express.static(staticPath));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api", routerAPI);

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "dist", "index.html"));
  // todo: error handle
});

const port = process.env.PORT || 3102;
app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});

const uri =
  "mongodb+srv://jamieChen:w0921759921@firstcluster.chbdk.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri || "mongodb://localhost:27017/jasPocketMonster", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected: ", new Date())) // 成功時顯示MongoDB Connected
  .catch((err) => console.log(err));
