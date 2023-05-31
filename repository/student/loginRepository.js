const mongoose  = require('mongoose')
const {studentSchema}=require('../../models/student/studentModel')


const updateLogin=async(condition,conditionEmail,updateInfo)=>{
    const studentModel=await mongoose.model(`class${condition.class}`,studentSchema)
    const createdData = await studentModel.findOneAndUpdate(conditionEmail,updateInfo);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to update" };
  }
}

module.exports={updateLogin}