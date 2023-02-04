const mongoose = require("mongoose");

const employeeProfileSchema = new mongoose.Schema({
    userid: {
        type: "string",
        require: [true, "Please enter userid"],
    },
    firstname: { type: "string", require: [true, "Please Enter first Name"]},
    lastname: { type: "string", require: [true, "Please Enter Last Name"]},
    address: { type: "string", require: true },
    phone: { type: "string", require: true },
    age: { type: Number, require: true },
    email: { type: "string", require: true},
    workingrole: { type: "string", require: true,},
    salary: { type: Number, require: true },
    avtar: { type: "string" }
}, { timestamps: true });

module.exports = mongoose.model('employeeprofile', employeeProfileSchema);