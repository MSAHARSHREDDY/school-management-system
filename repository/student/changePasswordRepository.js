const { studentSchema } = require("../../models/student/studentModel");
const mongoose = require("mongoose");

const changePassword = async (condition,emailCondition,updateInfo) => {
  const studentModel = await mongoose.model( `class${condition.class}`, studentSchema);
  const createdData = await studentModel.findOneAndUpdate(emailCondition,updateInfo);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to create" };
  }
};

module.exports={changePassword}