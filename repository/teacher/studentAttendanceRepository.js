const mongoose = require("mongoose");
const {studentAttendanceSchema}=require("../../models/student/studentAttendance")


const studentAttendance=async(condition,attendanceInfo)=>{
    const studentAttendanceModel=await mongoose.model(`class${condition.class}Attendance`,studentAttendanceSchema)
    attendanceInfo.class = condition.class;
    // attendanceInfo.date = new Date(attendanceInfo.date); // Convert the date string to a Date object
    const responseData=await studentAttendanceModel.create(attendanceInfo)
    if (responseData) {
        return { status: true, data: responseData };
      } else {
        return { status: false, data: "failed to create" };
      }
}






const viewStudentAttendance=async(condition)=>{
  const studentAttendanceModel=await mongoose.model(`class${condition.class}Attendance`,studentAttendanceSchema)
    
    const responseData=await studentAttendanceModel.find(condition)
    if (responseData.length>0) {
        return { status: true, data: responseData };
      } else {
        return { status: false, data: "failed to create" };
      }
}

module.exports={studentAttendance,viewStudentAttendance}