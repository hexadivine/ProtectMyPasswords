const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
require("dotenv").config();

const apiRoutes = require("./routes/apiRoutes");

// init
const app = express();

// using middleware
app.use(express.json());
app.use("/api", apiRoutes);
// const corsOptions = {
//     origin: process.env.CLIENT_URL, // Set this to your frontend URL
//     credentials: true,
//     allowedHeaders: ["sessionId", "Content-Type"],
//     exposedHeaders: ["sessionId"],
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false,
// };
// app.use(cors(corsOptions));

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
