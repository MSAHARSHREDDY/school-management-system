const { teacherSchema } = require("../../models/teacher/teacherModel");
const mongoose = require("mongoose");

const otpVerification = async (otpData,updateInfo) => {
  const studentModel = await mongoose.model("teacher",
    teacherSchema
  );
  const createdData = await studentModel.findOneAndUpdate(otpData,updateInfo);
  if (createdData.length>0) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to create" };
  }
};

const find = async (condition) => {
    const studentModel = await mongoose.model("teacher",
      teacherSchema
    );
    const createdData = await studentModel.find(condition);
    if (createdData.length > 0) {
      return { status: true, data: createdData };
    } else {
      return { status: false, data: "failed to create" };
    }
  };

module.exports ={otpVerification,find}