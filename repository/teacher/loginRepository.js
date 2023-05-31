const mongoose = require('mongoose')
const {teacherSchema}=require('../../models/teacher/teacherModel')


const updateLogin=async(conditionEmail,updateInfo)=>{
    const studentModel=await mongoose.model("teacher",teacherSchema)
    const createdData = await studentModel.findOneAndUpdate(conditionEmail,updateInfo);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to update" };
  }
}

module.exports={updateLogin}