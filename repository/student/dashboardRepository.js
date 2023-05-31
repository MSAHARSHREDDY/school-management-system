const mongoose  = require('mongoose')
const {studentSchema}=require('../../models/student/studentModel')


const studentDashBoard=async(condition)=>{
    const studentModel=await mongoose.model(`class${condition.class}`,studentSchema)
    const createdData = await studentModel.find(condition);
  if (createdData.length > 0) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to update" };
  }
}

module.exports={studentDashBoard}