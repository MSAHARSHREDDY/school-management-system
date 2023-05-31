const viewAttendanceService = require("../../services/student/viewAttendanceService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")

const viewAttendance=async(req,res)=>{
    const responseData=await viewAttendanceService.viewAttendance(req.body)
    res.send({"status":"200","message":responseData})
}
module.exports={viewAttendance}