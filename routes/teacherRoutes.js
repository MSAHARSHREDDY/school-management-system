const express=require("express")
const { studentAttendance, viewStudentAttendance } = require("../controllers/teacher/studentAttendanceController")
const { teacherRegistration } = require("../controllers/teacher/registrationController")
const { verifyOTP } = require("../controllers/teacher/verifyOtpController")
const { teacherLogin } = require("../controllers/teacher/loginController")
const { forgotPassword } = require("../controllers/teacher/forgotPasswordController")
const { changePassword } = require("../controllers/teacher/changePasswordController")
const { grade } = require("../controllers/teacher/gradeController")
const studentMarks = require("../controllers/teacher/studentMarksController")
const { viewStudentMarks } = require("../controllers/teacher/viewStudentMarksController")
const { notice } = require("../controllers/teacher/noticeController")
const {teacherVerifyToken}=require("../middleware/verifyToken")
const router=express.Router()

router.post("/studentAttendance",teacherVerifyToken,studentAttendance)
router.get("/viewStudentAttendance",teacherVerifyToken,viewStudentAttendance)
router.post("/registration",teacherRegistration)
router.post("/verifyOTP",verifyOTP)
router.post("/login",teacherLogin)
router.post("/forgotPassword",forgotPassword)
router.put("/changePassword",changePassword)
router.post("/grade",grade)
router.post("/studentMarks",teacherVerifyToken,studentMarks)
router.get("/viewStudentMarks",teacherVerifyToken,viewStudentMarks)
router.post("/notice",teacherVerifyToken,notice)


module.exports=router