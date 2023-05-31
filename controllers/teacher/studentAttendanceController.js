const studentAttendanceService = require("../../services/teacher/studentAttendanceService");
const registrationService = require("../../services/student/registrationService");
const { check, validationResult } = require("express-validator");
const { responseMessages } = require("../../constants/responseMessages");

const studentAttendance = async (req,res) => {
  const validations = [
    check("class")
      .trim()
      .notEmpty()
      .withMessage(responseMessages.registration.classNumberRequired)
      .matches("[0-9]")
      .withMessage(responseMessages.registration.classNumberInvalid),
    check("attendanceData.*.studentId")
      .trim()
      .notEmpty()
      .withMessage(responseMessages.registration.studentIdRequired)
      .custom((value) => {
        return registrationService.find({ _id: value,class:req.body.class }).then((studentInfo) => {
          var studentData = studentInfo.status;
          if (!studentData) {
            return Promise.reject(
              responseMessages.registration.studentIdInvalid
            );
          }
        });
      }),
    check("attendanceData.*.rollNo")
      .trim()
      .notEmpty()
      .withMessage(responseMessages.registration.rollNoRequired)
      .custom((value) => {
        return registrationService
          .find({ rollNo: value,class:req.body.class  })
          .then((rollNoInfo) => {
            var rollNoData = rollNoInfo.status;
            if (!rollNoData) {
              return Promise.reject(
                responseMessages.registration.rollNoInvalid
              );
            }
          });
      }),
    check("attendanceData.*.attendance")
      .trim()
      .notEmpty()
      .withMessage(responseMessages.registration.attendanceRequired),
  ];
  /*Run the validation rules. */
  for (let validation of validations) {
    var result = await validation.run(req);
    if (result.errors.length) break;
  }

  var errors = validationResult(req);
  if (errors.isEmpty()) {
    var responseData = await studentAttendanceService.studentAttendance(req.body);
    res.send({ status: "200", message: "success" });
  } else {
    res.json(errors);
  }
};

const viewStudentAttendance = async(req, res) => {
  const condition={class:req.query.class,}
 
  const responseData=await studentAttendanceService.viewStudentAttendance(condition )
  res.send({"status":"200","messge":"success",data:responseData})
}
module.exports = { studentAttendance,viewStudentAttendance };


