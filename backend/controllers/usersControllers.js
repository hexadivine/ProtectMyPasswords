const userDBHandler = require("./../models/userModel");

// login
const login = async (req, res) => {
    console.log("🚀 ~ login ~ req:", req);
    return res.send("login");
};

// signup
const signup = async (req, res) => {
    const { email, password } = req.body;
    const user = await userDBHandler.signup(email, password);
    res.send(user);
};

module.exports = { signup, login };
