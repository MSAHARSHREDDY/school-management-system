const mongoose  = require('mongoose')
const {adminSchema}=require('../../models/admin/adminModel')


const updateLogin=async(conditionEmail,updateInfo)=>{
    const adminModel=await mongoose.model("admin",adminSchema)
    const createdData = await adminModel.findOneAndUpdate(conditionEmail,updateInfo);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to update" };
  }
}

module.exports={updateLogin}