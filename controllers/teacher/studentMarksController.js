const studentMarksService = require("../../services/teacher/studentMarksService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")
const registrationService=require("../../services/student/registrationService")

const studentMarks=async(req,res)=>{
    const validations=[
        check("class").trim().notEmpty().withMessage(responseMessages.registration.classNumberRequired).matches('[0-9]').withMessage(responseMessages.registration.classNumberInvalid),
        check("marksData.*.studentId")
        .trim()
        .notEmpty()
        .withMessage(responseMessages.registration.studentIdRequired)
        .custom((value) => {
          return registrationService.find({ _id: value,class:req.body.class }).then((studentInfo) => {
            var studentData = studentInfo.status;
            if (!studentData) {
              return Promise.reject(
                responseMessages.registration.studentIdInvalid
              );
            }
          });
        }),
        check("marksData.*.telugu").trim().notEmpty().withMessage(responseMessages.marks.mark),
        check("marksData.*.hindi").trim().notEmpty().withMessage(responseMessages.marks.mark),
        check("marksData.*.english").trim().notEmpty().withMessage(responseMessages.marks.mark),
        check("marksData.*.math").trim().notEmpty().withMessage(responseMessages.marks.mark),
        check("marksData.*.science").trim().notEmpty().withMessage(responseMessages.marks.mark)

    ]
    for(let validation of validations)
    {
        var result=await validation.run(req)
        if (result.errors.length) break;
    }
    var errors= validationResult(req);
    if(errors.isEmpty())
    {
        var responseData=await studentMarksService.studentMarks(req.body)
        res.send({"status":"200","message":"success"})
    }
    else
    {
        res.json(errors);
    }
}
module.exports =studentMarks