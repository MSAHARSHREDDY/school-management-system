const forgotPasswordService = require("../../services/teacher/forgotPasswordService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")
const registrationService=require("../../services/teacher/registrationService")

const forgotPassword=async(req,res)=>{
    const validations=[
       
        check('email').trim().notEmpty().withMessage(responseMessages.registration.emailRequired).isEmail().withMessage(responseMessages.registration.emailInvalid)
        .custom((value)=>{
            return registrationService.find({ email: value}).then((emailInfo)=>{
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