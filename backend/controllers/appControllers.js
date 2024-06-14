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
        const result = await dbHandler.findById(id);
        if (result) {
            return res.status(200).json({ status: "ok", msg: results });
        }
        return res.status(404).json({ status: "error", msg: "Data not found!" });
    } catch (error) {
        return res.status(400).json({ status: "error", msg: "Data not found!" });
    }
};

// send services, emails & password
const postData = async (req, res) => {
    try {
        const { service, email, password } = req.body;
        const result = await dbHandler.create({
            service: service,
            email: email,
            password: password,
        });
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
    const result = await dbHandler.findOneAndDelete({ id: id });
    if (!result) {
        return res.sendStatus(400).json({ status: "error", msg: error.message });
    }
    return res.status(200).json({ status: "ok", msg: result });
};

module.exports = {
    getDatas,
    getData,
    postData,
    updateData,
    deleteData,
};
