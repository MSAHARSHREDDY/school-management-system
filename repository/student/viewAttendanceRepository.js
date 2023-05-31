const { default: mongoose } = require("mongoose")
const {studentAttendanceSchema}=require("../../models/student/studentAttendance")

const viewAttendance=async(condition)=>{
    const studentAttendanceModel=await mongoose.model(`class${condition.class}Attendance`,studentAttendanceSchema)
    const studentInfo=condition._id
    const responseData=await studentAttendanceModel.find({studentId:studentInfo})
    if(responseData.length > 0)
    {
        return{status:true,data:responseData}
    }
    else
    {
        return{status:false,data:"failed"}
    }
}
module.exports={viewAttendance}