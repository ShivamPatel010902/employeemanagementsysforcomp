const employeeprofile = require("../models/employeeProfileModel");

const showemployeeprofiles = (req, res, next) => {
    employeeprofile.find()
        .then((data) => {
            res.json({
                data
            })
        }).catch((error) => {
            res.json({
                message: "An error is occured"
            })
        })
}

const showemployeeprofile = (req, res, next) => {

    employeeprofile.findOne({ userid: req.params.userid }).then((data) => {
        res.json({
            data
        })
    }).catch((error) => {
        message: "An error is occured"
    })

}

const addemployeeprofile = (req, res, next) => {
    let newemployee = new employeeprofile(
        {
            userid: req.body.userid,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            phone: req.body.phone,
            age: req.body.age,
            email: req.body.email,
            workingrole: req.body.workingrole,
            salary: req.body.salary
        }
    )
    if (req.file) {
        newemployee.avtar = req.file.path;
    }
    newemployee.save().then(() => {
        res.json({
            massege: "Employee created successfully"
        })
    }).catch(error => {
        res.json({
            error
        })
    })
}

const updateemployeeprofile = (req, res, next) => {

    const updatedemployee = {
        userid: req.body.userid,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        phone: req.body.phone,
        age: req.body.age,
        email: req.body.email,
        workingrole: req.body.workingrole,
        salary: req.body.salary
    }
   
    employeeprofile.findOneAndUpdate({ userid: req.body.userid }, { $set: updatedemployee }).then(() => {
        res.json({
            message: "Employee update successfully"
        })
    }).catch(error => {
        res.json({
            error
        })
    })
}

const deletemployeeprofile = (req, res, next) => {

    employeeprofile.findOneAndRemove({ userid: req.body.userid }).then(() => {
        res.json({
            message: "Emplooye removed successfully"
        })
    }).catch(error => {
        res.json({
            message: "An error is occured"
        })
    })
}

module.exports = { showemployeeprofiles, showemployeeprofile, addemployeeprofile, updateemployeeprofile, deletemployeeprofile }