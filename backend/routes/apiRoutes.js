const express = require("express");
const route = express.Router();

const {
    postData,
    getDatas,
    getData,
    updateData,
    deleteData,
} = require("./../controllers/appControllers");

route.get("/", getDatas);
route.get("/:id", getData);
route.post("/", postData);
route.put("/:id", updateData);
route.delete("/:id", deleteData);

module.exports = route;
