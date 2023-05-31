const { adminSchema } = require("../../models/admin/adminModel");
const mongoose = require("mongoose");

const otpVerification = async (otpData,updateInfo) => {
  const adminModel = await mongoose.model(
   "admin",
    adminSchema
  );
  const createdData = await adminModel.findOneAndUpdate(otpData,updateInfo);
  if (createdData.length>0) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to create" };
  }
};

const find = async (condition) => {
    const adminModel = await mongoose.model("admin",
      adminSchema
    );
    const createdData = await adminModel.find(condition);
    if (createdData.length > 0) {
      return { status: true, data: createdData };
    } else {
      return { status: false, data: "failed to create" };
    }
  };

module.exports ={otpVerification,find}