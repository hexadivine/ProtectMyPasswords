const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
require("dotenv").config();

const apiRoutes = require("./routes/apiRoutes");
const usersRoutes = require("./routes/usersRoutes");

// init
const app = express();

// using middleware
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/user", usersRoutes);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("server started on " + process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
