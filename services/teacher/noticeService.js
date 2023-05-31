const noticeRepository = require("../../repository/teacher/noticeRepository");
const { sendMail } = require("../../config/sendMail");

const notice = async (body) => {
  const info = { 
    class: body.class,
     notice: body.notice,
     subject:body.subject,
     };
  const responseData = await noticeRepository.notice(info);
  if (responseData.status == true) {
    var totalDetails = responseData.data;
    for (i = 0; i < totalDetails.length; i++) 
    {
        var emailData={
            toEmail:totalDetails[i].email,
            subject:info.subject,
            html:info.notice
        }
        sendMail(emailData)
    }
  }

  return responseData
};
module.exports = { notice };
