const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userid: {
        type: "string",
        require: [true, "Please enter userid"],
        unique: [true, "Please enter vailed userid"]
    },
    password: {
        type: "string",
        require: [true, "Please enter passward"],
        unique: [true, "Please enter correct passward"]
    }
});

module.exports = mongoose.model("Users", userSchema);