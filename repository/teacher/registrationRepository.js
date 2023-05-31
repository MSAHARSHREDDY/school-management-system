const { teacherSchema } = require("../../models/teacher/teacherModel");
const mongoose = require("mongoose");

const teacherRegistration = async (registration) => {
  const teacherModel = await mongoose.model( "teacher", teacherSchema);
  const createdData = await teacherModel.create(registration);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to create" };
  }
};

const find=async(condition)=>{
    const teacherModel=await mongoose.model("teacher",teacherSchema)
    const createdData = await teacherModel.findOne(condition);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to find" };
  }

}



const totalStudents=async(condition)=>{
  const modelName=await mongoose.model("teacher",teacherSchema)
  const findData=await modelName.find(condition)
  if(findData.length>0)
  {
      return{status:true,data:findData}
  }
  else
  {
      return{status:false,message:"failed to fetch data"}
  }

}

const countTeacher=async(condition)=>{
  const modelName=await mongoose.model("teacher",teacherSchema)
  const findData=await modelName.countDocuments(condition)
  if(findData)
  {
      return{status:true,data:findData}
  }
  else
  {
      return{status:false,message:"failed to fetch data"}
  }
}

module.exports = { teacherRegistration,find,totalStudents,countTeacher };
