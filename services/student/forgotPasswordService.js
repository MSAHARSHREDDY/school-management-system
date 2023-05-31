const forgotPasswordRepository=require("../../repository/student/forgotPasswordRepository")
const {sendMail}=require("../../config/sendMail")
const otpGenerator = require("otp-generator")
const studentLoginRepository=require("../../repository/student/loginRepository")

const forgotPassword=async(body)=>{
    const otpValue=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });
    const condition={class:body.class}
    const conditionEmail={email:body.email}
    const updateInfo={otp:otpValue,otpVerified:false}
    var responseData=await studentLoginRepository.updateLogin(condition,conditionEmail,updateInfo)
    
    if(responseData.status==true){
    var emailData={
        toEmail:responseData.data.email,
        subject:`OTP Verification`,
        html:`Hii ${responseData.data.name} please find below otp <h2>${otpValue}`
      }
      sendMail(emailData)
      return responseData
    }
    else
    {
      return{status:false,data:"failed"}
    }
      

}
module.exports={forgotPassword}