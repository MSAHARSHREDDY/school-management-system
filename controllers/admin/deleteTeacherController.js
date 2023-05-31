const deleteTeacherService = require("../../services/admin/deleteTeacherService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")
const registrationService = require("../../services/teacher/registrationService")

const deleteTeacher=async(req,res)=>{
    const validations=[
        check("teacherId").trim().notEmpty().withMessage(responseMessages.registration.teacherIdRequired)
        .custom((value)=>{
            return registrationService.find({_id: value}).then((studentInfo)=>{
                var studentData=studentInfo.status
                if(!studentData)
                {
                    return Promise.reject(responseMessages.registration.teacherIdInvalid)
                }
            })
        })
    ]
    /*Run the validation rules. */
for (let validation of validations) {
    var result = await validation.run(req);
    if (result.errors.length) break;
}

    var errors = validationResult(req);
    if(errors.isEmpty())
    {
        var responseData=await deleteTeacherService.deleteTeacher(req.body)
        res.send({"status":"200","message":"success"})
    }
    else
    {
        res.json(errors)
    }
}
module.exports={deleteTeacher}