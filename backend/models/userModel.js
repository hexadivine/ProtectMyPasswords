const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.statics.login = async function (email, password) {};

userSchema.statics.signup = async function (email, password) {
    if (email == undefined || password == undefined) throw Error("All filed are require!");

    if (!validator.isEmail(email)) throw Error("Invalid email!");
    if (!validator.isStrongPassword(password)) throw Error("Password is not strong enough!");

    const hasData = await this.findOne({ email });
    if (hasData) throw Error("Email already exists!");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.create({ email: email, password: hashedPassword });

    return user;
};

module.exports = mongoose.model("Users", userSchema);
