const viewMarksRepository=require("../../repository/student/viewMarksRepository")

const viewMarks=async(body)=>{
    const responseData=await viewMarksRepository.viewMarks(body)
    if(responseData.status)
    {
    return responseData
    }
    else
    {
        return{status:false,data:"Teacher has not updated the marks for you"}
    }
}
module.exports={viewMarks}