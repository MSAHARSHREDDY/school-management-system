const mongoose=require("mongoose")
const {teacherSchema}=require("../../models/teacher/teacherModel")

const deleteTeacher=async(condition,updateInfo)=>{
    const studentModel=await mongoose.model("teacher",teacherSchema)
    const responseData=await studentModel.findByIdAndUpdate(condition._id,updateInfo)
    if(responseData)
    {
        return{status: 'true', data: responseData}
    }
    else
    {
        return{status: 'false', data:"failed"}
    }
}
module.exports={deleteTeacher}