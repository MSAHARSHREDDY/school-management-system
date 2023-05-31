const registrationRepository = require("../../repository/teacher/registrationRepository");
const bcrypt = require("bcrypt");
const {sendMail}=require("../../config/sendMail")
const otpGenerator = require("otp-generator")

const teacherRegistration = async (body) => {
  const hashPassord = await bcrypt.hash(body.password, 10);
 const otpValue=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });

  var registration = {
    name: body.name,
    email: body.email,
    mobile: body.mobile,
    password: hashPassord,
    otp:otpValue
  };
  var responseData = await registrationRepository.teacherRegistration(registration);
  if (responseData.status) {
    var emailData={
      toEmail:responseData.data.email,
      subject:`OTP Verification`,
      html:`Hii ${responseData.data.name} please find below otp <h2>${otpValue}`
    }
    sendMail(emailData)

  }
  return responseData;
};

const find = async (condition) => {
  var responseData = await registrationRepository.find(condition);
  return responseData;
};

module.exports = { teacherRegistration, find };
