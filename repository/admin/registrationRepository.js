const { adminSchema } = require("../../models/admin/adminModel");
const mongoose = require("mongoose");

const adminRegistration = async (registration) => {
  const adminModel = await mongoose.model( "admin", adminSchema);
  const createdData = await adminModel.create(registration);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to create" };
  }
};

const find=async(condition)=>{
    const adminModel=await mongoose.model("admin",adminSchema)
    const createdData = await adminModel.findOne(condition);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to find" };
  }

}



const totalStudents=async(condition)=>{
  const modelName=await mongoose.model("admin",adminSchema)
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

module.exports = { adminRegistration,find,totalStudents };
