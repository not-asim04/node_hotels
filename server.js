const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

//import person routes
const personRoutes = require("./routes/personRoutes");
app.use("/chick", personRoutes);


//import menu routes
const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

