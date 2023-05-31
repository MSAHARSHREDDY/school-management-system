const noticeService=require("../../services/teacher/noticeService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")

const notice=async(req,res)=>{
    const validations=[
        check("class").trim().notEmpty().withMessage(responseMessages.registration.classNumberRequired).matches('[0-9]').withMessage(responseMessages.registration.classNumberInvalid),
        check("subject").trim().notEmpty().withMessage(responseMessages.notice.subjectRequired),
        check("notice").trim().notEmpty().withMessage(responseMessages.notice.noticeRequired)
    ]
    for(let validation of validations)
    {
        var result = await validation.run(req);
    if (result.errors.length) break;
    }
    var errors=validationResult(req)
    if(errors.isEmpty())
    {
        var responseData=await noticeService.notice(req.body)
        res.send({"status":"200","messge":"success"})
    }
}
module.exports={notice}