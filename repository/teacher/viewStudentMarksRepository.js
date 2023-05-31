const { default: mongoose } = require("mongoose")
const {marksSchema}=require("../../models/student/marks")

const viewStudentMarks=async(condition)=>{
    const marksModel=await mongoose.model(`class${condition.class}mark`,marksSchema)
    const responseData=await marksModel.aggregate([
        {
            $lookup:{
                from:`class${condition.class}`,
                localField:"studentId",
                foreignField:"_id",
                as:"studentDetails"
            }   
        },
        {
            $unwind:"$studentDetails"
        },
         {
                $project: {
                   _id:0,studentId : "$studentId" ,name:"$studentDetails.name",rollNo:"$studentDetails.rollNo",totalMarks:"$total",average:"$average",grade:"$grade"
                }
            },
           
    ])
    if(responseData)
    {
        return{status:true,data:responseData}
    }
    else
    {
        return{status:false,data:"failed"}
    }
    
}
module.exports={viewStudentMarks}