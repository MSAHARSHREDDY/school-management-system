const mongoose=require('mongoose');
const {gradeSchema}=require("../../models/student/grades")

const grade=async(gradeData)=>{
    const gradeModel=await mongoose.model("grade",gradeSchema)
    const responseData=await gradeModel.create(gradeData)
    if(responseData)
    {
        return{status:true,data:responseData}
    }
    else
    {
        return{status:false,data:"failed"}
    }
}

const findAverage = async (averageInfo) => {
    const gradeModel = mongoose.model("grade", gradeSchema);
    const responseData = await gradeModel.find({
      start: { $lte: averageInfo }, // Check if averageInfo is greater than or equal to start
      end: { $gte: averageInfo } // Check if averageInfo is less than or equal to end
    });
  
    if (responseData.length > 0) {
      return { status: true, data: responseData };
    } else {
      return { status: false, data: "No data found within the given range" };
    }
  };
  


module.exports={grade,findAverage}