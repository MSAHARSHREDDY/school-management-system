const dashBoardService = require("../../services/student/dashBoardService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")

const studentDashBoard=async(req,res)=>{
    const responseData=await dashBoardService.studentDashBoard(req.body)
    var studentInfo={
        name:responseData.data[0].name,
        email:responseData.data[0].email,
        mobile:responseData.data[0].mobile,
        rollNo:responseData.data[0].rollNo
    }
    res.send({"status":"200","message":studentInfo})
}

module.exports={studentDashBoard}