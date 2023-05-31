const express=require("express")
const { deleteStudent } = require("../controllers/admin/deleteStudentController")
const { adminRegistration } = require("../controllers/admin/registrationController")
const { verifyOTP } = require("../controllers/admin/verifyOtpController")
const { adminLogin } = require("../controllers/admin/loginController")
const { forgotPassword } = require("../controllers/admin/forgotPasswordController")
const { changePassword } = require("../controllers/admin/changePasswordController")
const { adminDashboard } = require("../controllers/admin/dashboardController")
const {adminVerifyToken}=require("../middleware/verifyToken")
const { deleteTeacher } = require("../controllers/admin/deleteTeacherController")
const router=express.Router()


router.post("/registration",adminRegistration)
router.post("/verifyOTP",verifyOTP)
router.post("/adminLogin",adminLogin)
router.post("/forgotPassword",forgotPassword)
router.put("/changePassword",changePassword)
router.delete("/deleteStudent",adminVerifyToken,deleteStudent)
router.get("/dashboard",adminVerifyToken,adminDashboard)
router.delete("/deleteTeacher",adminVerifyToken,deleteTeacher)


module.exports=router