const viewMarksService = require("../../services/student/viewMarksService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")

const viewMarks=async(req,res)=>{
    const responseData=await viewMarksService.viewMarks(req.body)
    res.send({"status":"200","message":"success",responseData})
}
module.exports={viewMarks}