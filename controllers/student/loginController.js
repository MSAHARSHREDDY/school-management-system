const loginService = require("../../services/student/loginService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")
const registrationService=require("../../services/student/registrationService")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")

const studentLogin=async(req,res)=>{
    const validations = [
        check("class").trim().notEmpty().withMessage(responseMessages.registration.classNumberRequired).matches('[1-5]').withMessage(responseMessages.registration.classNumberInvalid),
        check("email").trim().notEmpty().withMessage(responseMessages.login.emailRequired)
            .custom((value) => {
                return registrationService.find({ email: value,deletedt:null,class:req.body.class }).then(async (emailInfo) => {
                    const emailData = emailInfo.status
                    if (!emailData) {
                        return Promise.reject(responseMessages.login.emailInvalid)
                    }
                    else {
                        const isMatch = await bcrypt.compare(req.body.password, emailInfo.data.password)
                        if (!isMatch) {
                            return Promise.reject(responseMessages.login.passwordInvalid)
                        }
                        else if (emailInfo.data.otpVerified == false) {
                            return Promise.reject(responseMessages.login.verifyOtpLogin)
                        }
                    }
                })
            }),
        check("password").trim().notEmpty().withMessage(responseMessages.login.password)
    ]
    for (let validation of validations) {
        var result = await validation.run(req);
        if (result.errors.length) break;
    }
    var errors = validationResult(req);
    if(errors.isEmpty())
    {
        var responseData=await loginService.studentLogin(req.body)
        const token=jwt.sign({_idInfo:responseData.data._id,emailInfo:responseData.data.email,classInfo:responseData.data.class},process.env.studentSecretKey,{expiresIn:"24h"})
        res.send({"status":"200","messge":"sucess",token})
    }
    else
    {
        res.json(errors)
    }



}
module.exports = {studentLogin}