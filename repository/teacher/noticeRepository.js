const mongoose=require('mongoose');
const {studentSchema}=require("../../models/student/studentModel")

const notice=async(info)=>{
    const studentModel=await mongoose.model(`class${info.class}`,studentSchema)
    const responseData=await studentModel.find()
    if(responseData.length>0)
    {
        return{status:true,data:responseData}
    }
    else
    {
        return{status:false,data:"failed"}
    }
}
module.exports={notice}