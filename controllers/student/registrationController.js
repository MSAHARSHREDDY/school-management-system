const registrationService = require("../../services/student/registrationService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")

const studentRegistration=async(req,res)=>{
    const validations = [
    check("name").trim().notEmpty().withMessage(responseMessages.registration.nameRequired),
    check("email").trim().notEmpty().withMessage(responseMessages.registration.emailRequired).isEmail()
    .withMessage(responseMessages.registration.emailInvalid)
    .custom((value)=>{
        return registrationService.find({email: value, deletedAt: null,class:req.body.class }).then((emailInfo)=>{
            var emailData=emailInfo.status
            if(emailData)
            {
                return Promise.reject(responseMessages.registration.emailAlreadyExists)
            }
        })
    }),
    check("mobile").trim().notEmpty().withMessage(responseMessages.registration.mobileRequired).matches(/^[0-9]{10}$/).withMessage(responseMessages.registration.mobileInvalid)
    .custom((value)=>{
        return registrationService.find({mobile:value,class:req.body.class,deleteAt:null}).then((mobileInfo)=>{
            var mobileData = mobileInfo.status;
            if (mobileData) {
                return Promise.reject(responseMessages.registration.mobileAlreadyExists);
            }
        })
    }),
    check("password").trim().notEmpty().withMessage(responseMessages.registration.password).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).withMessage(responseMessages.registration.passwordInvalid),
    check("confirmPassword").trim().notEmpty().withMessage(responseMessages.registration.confirmPasswordRequird)
    .equals(req.body.password).withMessage(responseMessages.registration.confirmPasswordNotMatching),
    check("class").trim().notEmpty().withMessage(responseMessages.registration.classNumberRequired).matches('[1-5]').withMessage(responseMessages.registration.classNumberInvalid)
]
        
/*Run the validation rules. */
for (let validation of validations) {
    var result = await validation.run(req);
    if (result.errors.length) break;
}

    var errors = validationResult(req);
    if(errors.isEmpty())
    {
        var responseData=await registrationService.studentRegistration(req.body)
        res.send({"status":"200",message:"success"});
    }
    else
    {
        res.json(errors);   
    }
}
module.exports = {studentRegistration}