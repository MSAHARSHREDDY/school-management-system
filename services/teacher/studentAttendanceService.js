const studentAttendnceRepository=require("../../repository/teacher/studentAttendanceRepository")
const moment = require("moment");

const studentAttendance=async(body)=>{
    const condition={class:body.class}
    
    for(i=0;i<body.attendanceData.length;i++)
    {
        var attendanceInfo={
           
            studentId:body.attendanceData[i].studentId,
            rollNo:body.attendanceData[i].rollNo,
            attendance:body.attendanceData[i].attendance
        }
        var responseData=await studentAttendnceRepository.studentAttendance(condition,attendanceInfo)
       
    }
    return responseData
}

// const viewStudentAttendance=async(condition)=>{
//     const responseData=await studentAttendnceRepository.viewStudentAttendance(condition)
   
//     if(responseData.status)
//     {
//         var totalDetails=responseData.data
        
//         var listingInfo=totalDetails.map((item)=>{
//             var obj={
//                 date: item.date ? moment(item.date).format("YYYY-MM-DD") : "",
//                 _id:item._id,
//                 rollNo:item.rollNo,
//                 attendance:item.attendance
//             }
           
//             return obj
            
//         })
//         var info=await Promise.all(listingInfo)
//         return info
//     }
//     else
//     {
//         return{status:false,data:"failed to fetch"}
//     }
// }


const viewStudentAttendance=async(condition)=>
{
const serviceResponse=await studentAttendnceRepository.viewStudentAttendance(condition)
if (serviceResponse.status == true){

    var responseData = {}
    if (serviceResponse.status) {
        for (const obj of serviceResponse.data) {
            responseData[`${obj.date}`] = []
        }
        for (const obj of serviceResponse.data) {
            var module = obj.date

            responseData[module].push({
                _id: obj._id,
                rollNo: obj.rollNo,
                attendance: obj.attendance,
            })
        }
    }


return { status: true, data: responseData };
} else {
return serviceResponse;
}
}

module.exports={studentAttendance,viewStudentAttendance}