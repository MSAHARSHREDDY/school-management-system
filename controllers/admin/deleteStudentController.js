const deleteStudentService = require("../../services/admin/deleteStudentService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")
const registrationService = require("../../services/student/registrationService")

const deleteStudent=async(req,res)=>{
    const validations=[
        check("class").trim().notEmpty().withMessage(responseMessages.registration.classNumberRequired).matches('[0-9]').withMessage(responseMessages.registration.classNumberInvalid),
        check("studentId").trim().notEmpty().withMessage(responseMessages.registration.studentIdRequired)
        .custom((value)=>{
            return registrationService.find({_id: value,class:req.body.class}).then((studentInfo)=>{
                var studentData=studentInfo.status
                if(!studentData)
                {
                    return Promise.reject(responseMessages.registration.studentIdInvalid)
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
        var responseData=await deleteStudentService.deleteStudent(req.body)
        res.send({"status":"200","message":"success"})
    }
    else
    {
        res.json(errors)
    }
}
module.exports={deleteStudent}