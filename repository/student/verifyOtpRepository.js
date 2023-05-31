const { studentSchema } = require("../../models/student/studentModel");
const mongoose = require("mongoose");

const otpVerification = async (otpData,updateInfo) => {
  const studentModel = await mongoose.model(
    `class${otpData.class}`,
    studentSchema
  );
  const createdData = await studentModel.findOneAndUpdate(otpData,updateInfo);
  if (createdData.length>0) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to create" };
  }
};

const find = async (condition) => {
    const studentModel = await mongoose.model(
      `class${condition.class}`,
      studentSchema
    );
    const createdData = await studentModel.find(condition);
    if (createdData.length > 0) {
      return { status: true, data: createdData };
    } else {
      return { status: false, data: "failed to create" };
    }
  };

module.exports ={otpVerification,find}