const mongoose = require("mongoose");

module.exports = mongoose.model("user", mongoose.Schema({
    name: String,
    profile: String,
    docs: [String]    //for multiple files
}, {
    timestamps: true
}))

// 3rd