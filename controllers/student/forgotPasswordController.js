const forgotPasswordService = require("../../services/student/forgotPasswordService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")
const registrationService=require("../../services/student/registrationService")

const forgotPassword=async(req,res)=>{
    const validations=[
        check("class").trim().notEmpty().withMessage(responseMessages.registration.classNumberRequired).matches('[1-5]').withMessage(responseMessages.registration.classNumberInvalid),
        check('email').trim().notEmpty().withMessage(responseMessages.registration.emailRequired).isEmail().withMessage(responseMessages.registration.emailInvalid)
        .custom((value)=>{
            return registrationService.find({ email: value,class:req.body.class}).then((emailInfo)=>{
                var emailData=emailInfo.status
                if(!emailData)
                {
                    return Promise.reject(responseMessages.registration.emailDoesnotExists)
                }
            })
        })
    ]
    for(let validation of validations)
    {
        var result = await validation.run(req);
        if (result.errors.length) break;
    }
    var errors = validationResult(req);
    if(errors.isEmpty())
    {
        var responseData=await forgotPasswordService.forgotPassword(req.body)
        res.send({"status":"200","message":"please check email for OTP"})
    }
    else
    {
        res.json(errors);
    }
}
module.exports={forgotPassword}