const { adminSchema } = require("../../models/admin/adminModel");
const mongoose = require("mongoose");

const changePassword = async (emailCondition,updateInfo) => {
  const adminModel = await mongoose.model( "admin", adminSchema);
  const createdData = await adminModel.findOneAndUpdate(emailCondition,updateInfo);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to create" };
  }
};

module.exports={changePassword}