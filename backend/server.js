const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const apiRoutes = require("./routes/apiRoutes");

// init
const app = express();

// using middleware
app.use(express.json());
app.use("/api", apiRoutes);

mongoose;

// listen
app.listen(process.env.PORT, () => {
    console.log("hi");
});
