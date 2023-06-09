const express=require('express')
const { studentRegistration } = require('../controllers/student/registrationController')
const { verifyOTP } = require('../controllers/student/verifyOtpController')
const { studentLogin } = require('../controllers/student/loginController')
const { forgotPassword } = require('../controllers/student/forgotPasswordController')
const { changePassword } = require('../controllers/student/changePasswordController')
const {studentVerifyToken}=require("../middleware/verifyToken")
const { studentDashBoard } = require('../controllers/student/dashBoardController')
const { viewAttendance } = require('../controllers/student/viewAttendanceController')
const { viewMarks } = require('../controllers/student/veiwMarksController')
const { updateProfile } = require('../controllers/student/updateProfileController')
const router=express.Router()

router.post("/registration",studentRegistration)
router.post("/verifyOTP",verifyOTP)
router.post("/studentLogin",studentLogin)
router.post("/forgotPassword",forgotPassword)
router.put("/changePassword",changePassword)
router.put("/updateProfile",studentVerifyToken,updateProfile)
router.get("/dashboard",studentVerifyToken,studentDashBoard)
router.get("/attendance",studentVerifyToken,viewAttendance)
router.get("/viewMarks",studentVerifyToken,viewMarks)

module.exports =router