const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const db = process.env.DB;
const route = require("./AllRoutes/routes");
const bodyParser = require('body-parser');
var cors = require('cors')


//connecting mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())


//routes
app.use("/api", route);

//server start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
