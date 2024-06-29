const express = require("express");

const dbHandler = require("../models/appModel");

// get all services, emails & passwords
const getDatas = async (req, res) => {
    try {
        const results = await dbHandler.find({}).sort({ createdAt: -1 });
        if (results) {
            return res.status(200).json({ status: "ok", msg: results });
        }
        return res.status(404).json({ status: "error", msg: "Data not found!" });
    } catch (error) {
        return res.status(400).json({ status: "error", msg: "Data not found!" });
    }
};

// get one services, emails & password
// 6665f47682251436aa06f197
const getData = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const result = await dbHandler.findById(id);
        console.log(1);
        console.log(result);
        console.log(result == true);
        console.log(!result);
        if (!result) {
            console.log("yoooo");
            return res.status(404).json({ status: "error", msg: "Data not found!" });
        }
        console.log("nooo");
        return res.status(200).json({ status: "ok", msg: result });
    } catch (error) {
        return res.status(400).json({ status: "error", msg: error.msg });
    }
};

// send services, emails & password
const postData = async (req, res) => {
    try {
        console.log("triggered");
        const { service, email, password } = req.body;
        console.log("got data");
        const result = await dbHandler.create({
            service: service,
            email: email,
            password: password,
        });
        console.log("data added");
        console.log("sending response");
        return res.status(200).json({ status: "ok", msg: result });
    } catch (error) {
        return res.sendStatus(400).json({ status: "error", msg: error.message });
    }
};

// update data
const updateData = async (req, res) => {
    const { id } = req.params;
    const updateTo = req.body;
    const result = await dbHandler.findOneAndUpdate({ _id: id }, updateTo);
    if (!result) return res.sendStatus(400).json({ status: "error", msg: error.message });
    return res.status(200).json({ status: "ok", msg: result });
};

// delete data
const deleteData = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const result = await dbHandler.findOneAndDelete({ _id: id });
    console.log(result);
    if (result) {
        return res.status(200).json({ status: "ok", msg: result });
    }
    return res.status(400).json({ status: "error", msg: "Error while deleting data" });
};

module.exports = {
    getDatas,
    getData,
    postData,
    updateData,
    deleteData,
};
