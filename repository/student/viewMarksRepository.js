const { default: mongoose } = require("mongoose")
const {marksSchema}=require("../../models/student/marks")

const viewMarks=async(condition)=>{
    const marksModel=await mongoose.model(`class${condition.class}mark`,marksSchema)
    const studentIdInfo=condition._id
    const responseData=await marksModel.find({studentId:studentIdInfo}).select({_id:0,studentId:0,__v:0})
    if(responseData.length > 0) 
    {
        return{status:true,data:responseData}
    }
    else
    {
        return{status:false,message:"failed"}
    }
}
module.exports={viewMarks}