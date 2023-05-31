const viewStudentMarksService = require("../../services/teacher/viewStudentMarksService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages");
const { request } = require("express");

const viewStudentMarks=async(req,res)=>{
    const condition={class:req.query.class}
    if(condition){
    const responseData=await viewStudentMarksService.viewStudentMarks(condition)
    res.send({"status":"200","message":"sucsess",responseData})
    }
    else
    {
        res.send({"status":"400","message":"cannot find class"})
    }
}
module.exports={viewStudentMarks}