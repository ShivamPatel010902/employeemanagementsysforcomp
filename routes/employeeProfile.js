const express = require("express");
const router = express.Router();

const employeeProfileController = require("../controllers/employeeProfileController");
const upload = require("../midleware/upload")

router.get('/showemployeeprofile/:userid', employeeProfileController.showemployeeprofile);
router.post('/addemployeeprofile', upload.single('avtar'), employeeProfileController.addemployeeprofile);
router.post('/updateemployeeprofile',employeeProfileController.updateemployeeprofile);
router.post('/deletemployeeprofile', employeeProfileController.deletemployeeprofile);

module.exports = router;