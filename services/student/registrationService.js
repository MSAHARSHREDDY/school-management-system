const registrationRepository = require("../../repository/student/registrationRepository");
const bcrypt = require("bcrypt");
const {sendMail}=require("../../config/sendMail")
const otpGenerator = require("otp-generator")

const studentRegistration = async (body) => {
  const hashPassord = await bcrypt.hash(body.password, 10);
 const otpValue=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });

  var registration = {
    name: body.name,
    email: body.email,
    mobile: body.mobile,
    password: hashPassord,
    class: body.class,
    otp:otpValue
  };
  var responseData = await registrationRepository.studentRegistration(registration);
  if (responseData.status) {
    const condition={class:body.class}
    var totalStudents=await registrationRepository.totalStudents(condition)
    var rollNoData=totalStudents.data.length
    //console.log(rollNoData)
    const conditionId={_id:responseData.data._id}
    const updateInfo={rollNo:rollNoData}

    await registrationRepository.updateRegistration(condition,conditionId, updateInfo);
    var emailData={
      toEmail:responseData.data.email,
      subject:`OTP Verification`,
      html:`Hii ${responseData.data.name} please find below otp <h2>${otpValue}`
    }
    sendMail(emailData)
    return responseData;
  }
  else
  {
    return{status:false,data:"failed in registration"}
  }
  
};

const find = async (condition) => {
  var responseData = await registrationRepository.find(condition);
  return responseData;
};

module.exports = { studentRegistration, find };
