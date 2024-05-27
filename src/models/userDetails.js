const mongoose = require('../configurations/dbConfig');

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ["admin", "customer"], default: "customer" }
});
module.exports = mongoose.model("User", userschema);