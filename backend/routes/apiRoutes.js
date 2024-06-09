const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
    return res.json({ msg: "yo" });
});

route.post("/", (req, res) => {
    const { service, email, password } = req.body;
    return res.status(200).json({
        service: service,
        email: email,
        password: password,
    });
});

module.exports = route;
