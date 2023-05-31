const updateProfileService = require("../../services/student/updateProfileService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")

const updateProfile=async(req,res)=>{
    const validations=[
        check("name").trim().notEmpty().withMessage(responseMessages.registration.nameRequired),
    check("email").trim().notEmpty().withMessage(responseMessages.registration.emailRequired).isEmail()
    .withMessage(responseMessages.registration.emailInvalid),
    check("mobile").trim().notEmpty().withMessage(responseMessages.registration.mobileRequired).matches(/^[0-9]{10}$/).withMessage(responseMessages.registration.mobileInvalid)
    ]
    for(let validation of validations)
    {
        var result = await validation.run(req);
        if (result.errors.length) break;
    }
    var errors=validationResult(req)
    if(errors.isEmpty())
    {
        var responseData=await updateProfileService.updateProfile(req.body)
        res.send({"status":"200","message":"success"})
    }
    else
    {
        res.json(errors)
    }
}
module.exports={updateProfile}