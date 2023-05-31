const changePasswordService = require("../../services/teacher/changePasswordService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")
const registrationService=require("../../services/teacher/registrationService")

const changePassword=async(req,res)=>{
const validations=[
    check("email").trim().notEmpty().withMessage(responseMessages.registration.emailRequired).isEmail().withMessage(responseMessages.registration.emailInvalid)
    .custom((value)=>{
        return registrationService.find({email:value}).then((emailInfo)=>{
            var emailData=emailInfo.status
            if(!emailData)
            {
                return Promise.reject(responseMessages.registration.emailDoesnotExists)
            }
        })
    }),
    check("password").trim().notEmpty().withMessage(responseMessages.registration.password).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).withMessage(responseMessages.registration.passwordInvalid),
    check("confirmPassword").trim().notEmpty().withMessage(responseMessages.registration.confirmPasswordRequird)
    .equals(req.body.password).withMessage(responseMessages.registration.confirmPasswordNotMatching),
]
/*Run the validation rules. */
for (let validation of validations) {
    var result = await validation.run(req);
    if (result.errors.length) break;
}

    var errors = validationResult(req);
    if(errors.isEmpty())
    {
        var responseData=await changePasswordService.changePassword(req.body)
        res.send({"status":"200",message:"success"});
    }
    else
    {
        res.json(errors);   
    }
}

module.exports={changePassword}
