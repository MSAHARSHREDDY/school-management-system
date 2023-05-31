const viewStudentMarksRepository=require("../../repository/teacher/viewStudentMarksRepository")

const viewStudentMarks=async(condition)=>{
    const responseData=await viewStudentMarksRepository.viewStudentMarks(condition)
    return responseData
}
module.exports={viewStudentMarks}