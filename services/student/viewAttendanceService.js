const viewAttendanceRepository = require("../../repository/student/viewAttendanceRepository");
const moment = require("moment");
const viewAttendance = async (body) => {
  const condition = { _id: body._id, class: body.class };
  const responseData = await viewAttendanceRepository.viewAttendance(condition);
  if (responseData.status == true) {
    var totalDetails = responseData.data;
    var listingInfo = await totalDetails.map((item) => {
      var obj = {
        date: item.date ? moment(item.date).format("YYYY-MM-DD") : "",
        attendance: item.attendance,
      };
      return obj;
    });
    var info = await Promise.all(listingInfo);
    return info;
  } else {
    return { status: false, data: "teacher has not posted the attendance" };
  }
};
module.exports = { viewAttendance };
