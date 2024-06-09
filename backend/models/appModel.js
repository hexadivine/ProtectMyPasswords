const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appSchema = new Schema(
    {
        service: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("appModel", appSchema);
