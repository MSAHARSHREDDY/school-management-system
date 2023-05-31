const mongoose=require("mongoose")
const {studentSchema}=require("../../models/student/studentModel")

const deleteStudent=async(condition,updateInfo)=>{
    const studentModel=await mongoose.model(`class${condition.class}`,studentSchema)
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
module.exports={deleteStudent}