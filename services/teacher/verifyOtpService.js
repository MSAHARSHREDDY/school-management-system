const verifyOtpRepository=require("../../repository/teacher/verifyOtpRepository")
 const otpVerification=async(body)=>{
    const otpData={otp:body.otp}
    const updateInfo={otpVerified:true}
    var responseData=await verifyOtpRepository.otpVerification(otpData,updateInfo)
    return responseData
}

const find=async(condition)=>{
    var responseData=await verifyOtpRepository.find(condition)
    return responseData
}
module.exports={otpVerification,find}