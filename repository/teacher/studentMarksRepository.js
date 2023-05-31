const { default: mongoose } = require("mongoose")
const {marksSchema}=require("../../models/student/marks")

const studentMarks=async(condition,studentMarksInfo)=>{
    const marksModel=await mongoose.model(`class${condition.class}mark`,marksSchema)
    const responseData=await marksModel.create(studentMarksInfo)
    if(responseData)
    {
        return{status:true,data:responseData}
    }
    else
    {
        return{status:false,message:"failed"}
    }
}

const update=async(condition,conditionId,updateInfo)=>{
    const marksModel=await mongoose.model(`class${condition.class}mark`,marksSchema)
    const responseData=await marksModel.findOneAndUpdate(conditionId,updateInfo)
    if(responseData)
    {
        return{status:true,data:responseData}
    }
    else
    {
        return{status:false,message:"failed"}
    }
}

module.exports={studentMarks,update}