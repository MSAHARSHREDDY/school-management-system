const dashboardRepository=require("../../repository/admin/dashboardRepository")
const studentRegistrationRepository=require("../../repository/student/registrationRepository")
const teacherRegistrationRepository=require("../../repository/teacher/registrationRepository")
const adminDashboard=async()=>{
    const condition={deletedAt:null}
    const modelNames={class1Data:"class1",class2Data:"class2",class3Data:"class3",class4Data:"class4",class5Data:"class5"}
    const entries = Object.entries(modelNames);
    const studentCount=await studentRegistrationRepository.countStudents(entries,condition)
    const teacherCount=await teacherRegistrationRepository.countTeacher(condition)

    if(studentCount)
    {
        var totalDetails=studentCount.data
        totalCount=0
      for(i=0;i<totalDetails.length;i++)
      {
      
        totalCount=totalCount+totalDetails[i].count
      }
      const totalInfo={
        Students:totalCount,
        Teachers:teacherCount.data

      }
      return totalInfo
    }
    else
    {
        return {status:false,data:"failed"}
    }

}
module.exports={adminDashboard}