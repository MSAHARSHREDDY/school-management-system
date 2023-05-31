const { teacherSchema } = require("../../models/teacher/teacherModel");
const mongoose = require("mongoose");

const changePassword = async (emailCondition,updateInfo) => {
  const studentModel = await mongoose.model( "teacher", teacherSchema);
  const createdData = await studentModel.findOneAndUpdate(emailCondition,updateInfo);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to create" };
  }
};

module.exports={changePassword}