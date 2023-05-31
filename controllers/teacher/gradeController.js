const gradeService = require("../../services/teacher/gradeService");
const { check, validationResult } = require("express-validator");
const { responseMessages } = require("../../constants/responseMessages");

const grade=async(req,res)=>{
const validations=[
    check("gradesInfo.*.start").trim().notEmpty().withMessage(responseMessages.grade.start),
    check("gradesInfo.*.end").trim().notEmpty().withMessage(responseMessages.grade.end),
    check("gradesInfo.*.grade").trim().notEmpty().withMessage(responseMessages.grade.grade),

]
/*Run the validation rules. */
for (let validation of validations) {
    var result = await validation.run(req);
    if (result.errors.length) break;
}

    var errors = validationResult(req);
    if(errors.isEmpty())
    {
        var responseData=await gradeService.grade(req.body)
        res.send({"status":"200","message":"success"})
    }
}
module.exports={grade}