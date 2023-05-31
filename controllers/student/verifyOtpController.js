const verifyOtpService = require("../../services/student/verifyOtpService")
const { check, validationResult } = require('express-validator');
const {responseMessages} = require("../../constants/responseMessages")

const verifyOTP = async (req, res) => {
    try {
        const validations = [
            check("class").trim().notEmpty().withMessage(responseMessages.registration.classNumberRequired).matches('[1-5]').withMessage(responseMessages.registration.classNumberInvalid),
                check("otp").trim().notEmpty().withMessage(responseMessages.verifyOtp.otpRequired)
                .custom((value)=>{
                    return verifyOtpService.find({otp:value,class:req.body.class}).then((otpInfo)=>{
                        var otpData=otpInfo.status
                        if(!otpData)
                        {
                            return Promise.reject(responseMessages.verifyOtp.otpInvalid)
                        }
                    })
                })
        ]

        for (let validation of validations) {
            var result = await validation.run(req);
            if (result.errors.length) break;
        }
        var errors = validationResult(req);
        if(errors.isEmpty())
        {
            const emailData=await verifyOtpService.otpVerification(req.body)
            res.send({"status":"200","message":"OTP Verified successfully"})
        }
        else
        {
            res.json(errors)
            console.log(errors)
        }
    } catch (error) {

    }
}

module.exports={verifyOTP}