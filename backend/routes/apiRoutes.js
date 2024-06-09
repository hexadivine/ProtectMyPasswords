const express = require("express");
const route = express.Router();

const dbHandler = require("../models/appModel");

route.get("/", (req, res) => {
    return res.json({ msg: "yo" });
});

route.post("/", async (req, res) => {
    try {
        const { service, email, password } = req.body;
        const result = await dbHandler.create({
            service: service,
            email: email,
            password: password,
        });
        return res.status(200).json({ status: "ok", msg: result });
    } catch (error) {
        return res.status(400).json({ status: "error", msg: error.message });
    }
});

module.exports = route;
