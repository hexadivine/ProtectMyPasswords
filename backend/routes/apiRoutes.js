const express = require("express");
const route = express.Router();

const { postData, getDatas, getData } = require("./../controllers/appControllers");

route.get("/", getDatas);
route.get("/:id", getData);
route.post("/", postData);

module.exports = route;
