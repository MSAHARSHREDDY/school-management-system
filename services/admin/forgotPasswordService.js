const forgotPasswordRepository=require("../../repository/admin/forgotPasswordRepository")
const {sendMail}=require("../../config/sendMail")
const otpGenerator = require("otp-generator")
const adminLoginRepository=require("../../repository/admin/loginRepository")

const forgotPassword=async(body)=>{
    const otpValue=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });
    const conditionEmail={email:body.email}
    const updateInfo={otp:otpValue,otpVerified:false}
    var responseData=await adminLoginRepository.updateLogin(conditionEmail,updateInfo)
    
    if(responseData.status==true){
    var emailData={
        toEmail:responseData.data.email,
        subject:`OTP Verification`,
        html:`Hii ${responseData.data.name} please find below otp <h2>${otpValue}`
      }
      sendMail(emailData)
    }
      return responseData
}
module.exports={forgotPassword}