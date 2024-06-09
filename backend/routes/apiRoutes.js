const express = require("express");
const route = express.Router();

const { postData, getDatas, getData, updateData } = require("./../controllers/appControllers");

route.get("/", getDatas);
route.get("/:id", getData);
route.post("/", postData);
route.put("/:id", updateData);

module.exports = route;
